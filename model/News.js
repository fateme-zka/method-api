const Base = require("./Base");

module.exports = (sequelize, DataTypes) => {
    return Base(sequelize, DataTypes, "news", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        category_id: { type: DataTypes.INTEGER, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        image: { type: DataTypes.STRING, allowNull: true },
    })
}