const Base = require("./Base");

module.exports = (sequelize, DataTypes) => {
	return Base(sequelize, DataTypes, "festival", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
		title: { type: DataTypes.STRING, allowNull: false },
		image: { type: DataTypes.STRING, allowNull: true },
		organizer: { type: DataTypes.STRING, allowNull: true },
		sign_up_date: { type: DataTypes.DATE, allowNull: true },
		send_date: { type: DataTypes.DATE, allowNull: true },
		call_dl_link: { type: DataTypes.STRING, allowNull: true },
		description: { type: DataTypes.STRING, allowNull: true },
	})
}