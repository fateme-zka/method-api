const Base = require("./Base");

module.exports = (sequelize, DataTypes) => {
    return Base(sequelize, DataTypes, "gallery", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        image: { type: DataTypes.STRING, allowNull: false },
    })
}