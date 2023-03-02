const Sequelize = require('sequelize');

module.exports = class Context {
    constructor() {
        this.database = require('./config/database');
    }
    static initWhere(column, value) {
        if (value) {
            let toks = value.split(' ');
            if (toks.length > 0) {
                let conditions = [];
                for (let i = 0; i < toks.length; i++) {
                    let obj = {};
                    obj[column] = { [Sequelize.Op.like]: '%' + toks[i] + '%' };
                    conditions.push(obj);
                }
                return conditions;
            }
        }
        return [];
    }
    init() {
        // Tables
        const Admin = require('./model/Admin');
        const User = require('./model/User');
        const Festival = require('./model/Festival');
        const Gallery = require('./model/Gallery');
        const News = require('./model/News');
        const NewsCategory = require('./model/NewsCategory');
        const Workshop = require('./model/Workshop');

        const admin = Admin(this.database, Sequelize.DataTypes);
        const user = User(this.database, Sequelize.DataTypes);
        const festival = Festival(this.database, Sequelize.DataTypes);
        const gallery = Gallery(this.database, Sequelize.DataTypes);
        const news = News(this.database, Sequelize.DataTypes);
        const news_category = NewsCategory(this.database, Sequelize.DataTypes);
        const workshop = Workshop(this.database, Sequelize.DataTypes);

        user.belongsTo(admin, { foreignKey: { name: 'admin_id', allowNull: false } });
        news.belongsTo(news_category, { foreignKey: { name: 'category_id', allowNull: false } });
        
        this.database.sync({ force: false });
    }

};