const Base = require("./Base");

module.exports = (sequelize, DataTypes) => {
	return Base(sequelize, DataTypes, "workshop", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
		title: { type: DataTypes.STRING, allowNull: false },
		image: { type: DataTypes.STRING, allowNull: true },
		teacher: { type: DataTypes.STRING, allowNull: true },
		sign_up_date: { type: DataTypes.DATE, allowNull: true },
		event_date: { type: DataTypes.DATE, allowNull: true },
		event_location: { type: DataTypes.STRING, allowNull: true },
		fee: { type: DataTypes.BIGINT, allowNull: true },
		description: { type: DataTypes.STRING, allowNull: true },
	})
}