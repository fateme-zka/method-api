const Base = require("./Base");

module.exports = (sequelize, DataTypes) => {
    return Base(sequelize, DataTypes, "news_category", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
    })
}