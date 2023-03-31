const Base = require("./Base");

module.exports = (sequelize, DataTypes) => {
	return Base(sequelize, DataTypes, "course", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
		title: { type: DataTypes.STRING, allowNull: false },
		teacher: { type: DataTypes.STRING, allowNull: false },
		image: { type: DataTypes.STRING, allowNull: true },
		goals: { type: DataTypes.STRING, allowNull: true },
		description: { type: DataTypes.STRING, allowNull: true },
	})
}