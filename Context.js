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
        // const Charity = require('./model/Charity');

        // const charity = Charity(this.database, Sequelize.DataTypes);

        // charity.belongsTo(country, { foreignKey: { name: 'country_id', allowNull: false } });
        
        this.database.sync({ force: false });
    }

};