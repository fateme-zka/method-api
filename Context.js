const Sequelize = require("sequelize");
const { error_operation } = require("./util/error_operation");

module.exports = class Context {
	constructor() {
		this.database = require("./config/database");
	}

	init() {
		// Tables
		const User = require("./model/User");
		const Course = require("./model/Course");
		const Festival = require("./model/Festival");
		const Gallery = require("./model/Gallery");
		const GalleryCategory = require("./model/GalleryCategory");
		const Student = require("./model/Student");
		const Theater = require("./model/Theater");
		const Workshop = require("./model/Workshop");

		const user = User(this.database, Sequelize.DataTypes);
		const course = Course(this.database, Sequelize.DataTypes);
		const festival = Festival(this.database, Sequelize.DataTypes);
		const gallery = Gallery(this.database, Sequelize.DataTypes);
		const gallery_category = GalleryCategory(this.database, Sequelize.DataTypes);
		const student = Student(this.database, Sequelize.DataTypes);
		const theater = Theater(this.database, Sequelize.DataTypes);
		const workshop = Workshop(this.database, Sequelize.DataTypes);

		//set foreignKey
		gallery.belongsTo(gallery_category, {
			foreignKey: { name: "gallery_categroy_id", allowNull: false },
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

	async getTheaters() {
		return await this.database.models.theater.findAll({});
	}

	async getFestivals() {
		return await this.database.models.festival.findAll({});
	}

	async getWorkshops() {
		return await this.database.models.workshop.findAll({});
	}

	async getGalleries() {
		return await this.database.models.gallery.findAll({});
	}

	async getCourses() {
		return await this.database.models.course.findAll({});
	}

};
