const Sequelize = require("sequelize");
const { error_operation } = require("./util/error_operation");

module.exports = class Context {
	constructor() {
		this.database = require("./config/database");
	}

	init() {
		// Tables
		const Admin = require("./model/Admin");
		const User = require("./model/User");
		const Festival = require("./model/Festival");
		const Gallery = require("./model/Gallery");
		const News = require("./model/News");
		const NewsCategory = require("./model/NewsCategory");
		const Workshop = require("./model/Workshop");

		const admin = Admin(this.database, Sequelize.DataTypes);
		const user = User(this.database, Sequelize.DataTypes);
		const festival = Festival(this.database, Sequelize.DataTypes);
		const gallery = Gallery(this.database, Sequelize.DataTypes);
		const news = News(this.database, Sequelize.DataTypes);
		const news_category = NewsCategory(this.database, Sequelize.DataTypes);
		const workshop = Workshop(this.database, Sequelize.DataTypes);

		user.belongsTo(admin, {
			foreignKey: { name: "admin_id", allowNull: false },
		});
		news.belongsTo(news_category, {
			foreignKey: { name: "category_id", allowNull: false },
		});

		this.database.sync({ force: false });
	}

	static initWhere(column, value) {
		if (value) {
			let toks = value.split(" ");
			if (toks.length > 0) {
				let conditions = [];
				for (let i = 0; i < toks.length; i++) {
					let obj = {};
					obj[column] = { [Sequelize.Op.like]: "%" + toks[i] + "%" };
					conditions.push(obj);
				}
				return conditions;
			}
		}
		return [];
	}

	async getModel(model, options, noErrorOnEmpty) {
		if (!options) options = {};
		let value = await this.database.models[model].findOne(options);
		if (!noErrorOnEmpty)
			if (!value)
				error_operation.throwError(404, "Could not found " + model);
		return value;
	}

	async getUser(id) {
		return await this.getModel("user", { where: { id } });
	}

	async getNews() {
		return await this.database.models.news.findAll();
	}

	async getFestivals() {
		return await this.database.models.festival.findAll();
	}

	async getWorkshops() {
		return await this.database.models.workshop.findAll();
	}

	async getGalleries() {
		return await this.database.models.gallery.findAll();
	}

	async addMessage(name, email, title, description) {
		// todo add message
	}
};
