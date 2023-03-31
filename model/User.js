const Base = require("./Base");

module.exports = (sequelize, DataTypes) => {
	return Base(sequelize, DataTypes, "user", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
		admin: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue:false },
		name: { type: DataTypes.STRING, allowNull: false },
		family: { type: DataTypes.STRING, allowNull: false },
		city: { type: DataTypes.STRING, allowNull: true },
		province: { type: DataTypes.STRING, allowNull: true },
		email: { type: DataTypes.STRING, allowNull: false },
		phone: { type: DataTypes.STRING(15), allowNull: false },
		birthday: { type: DataTypes.DATE, allowNull: true },
        password: { type: DataTypes.STRING, allowNull: false, secure: true },
        new_password: { type: DataTypes.STRING, allowNull: true, secure: true },
		e_otp: { type: DataTypes.STRING(6), allowNull: true, secure: true },
		e_otp_time: { type: 'TIMESTAMP', allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), secure: true },
		e_otp_attempt: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false, secure: true },
		e_try_attempt: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false, secure: true },
		e_approved: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
		p_otp: { type: DataTypes.STRING(6), allowNull: true, secure: true },
		p_otp_time: { type: 'TIMESTAMP', allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), secure: true },
		p_otp_attempt: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false, secure: true },
		p_try_attempt: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false, secure: true },
		p_approved: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
	})
}