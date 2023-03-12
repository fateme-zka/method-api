const Base = require("./Base");
const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	return Base(sequelize, DataTypes, "artist", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
		course_id: { type: DataTypes.INTEGER, allowNull: false },
		name: { type: DataTypes.STRING, allowNull: false },
		family: { type: DataTypes.STRING, allowNull: false },
		national_code: { type: DataTypes.STRING, allowNull: false },
		birthday: { type: DataTypes.DATE, allowNull: false },
		birth_city: { type: DataTypes.STRING, allowNull: true },
		degree: { type: DataTypes.STRING, allowNull: true },
		job: { type: DataTypes.STRING, allowNull: true },
		gender: {
			type: Sequelize.ENUM(
				"Male",
				"Female"
			),
			allowNull: false
		},
		married: { type: DataTypes.BOOLEAN, allowNull: false },
		height: { type: DataTypes.BOOLEAN, allowNull: false },
		weight: { type: DataTypes.BOOLEAN, allowNull: false },
		eye_color: { type: DataTypes.BOOLEAN, allowNull: false },
		cell_phone: { type: DataTypes.STRING(15), allowNull: false },
		phone: { type: DataTypes.STRING(15), allowNull: true },
		referral_type: {
			type: Sequelize.ENUM(
				"Friends",
				"Billboard",
				"SocialMedia"
			),
			allowNull: true
		},
		referral_name: { type: DataTypes.STRING, allowNull: true },
		age_range: {
			type: Sequelize.ENUM(
				"6_11",
				"12_17",
				"18_100"
			),
			allowNull: false
		},
		art_records: { type: Sequelize.ARRAY(Sequelize.JSON), allowNull: true }, // todo check
		other_art_records: { type: Sequelize.ARRAY(Sequelize.JSON), allowNull: true }, // todo check
		telegram_subscription: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
	})
}