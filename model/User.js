const Base = require("./Base");

module.exports = (sequelize, DataTypes) => {
    return Base(sequelize, DataTypes, "user", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        admin_id: { type: DataTypes.INTEGER, allowNull: true },
        referral_id: { type: DataTypes.INTEGER, allowNull: true },
        code: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        family: { type: DataTypes.STRING, allowNull: false },
        city: { type: DataTypes.STRING, allowNull: true },
        province: { type: DataTypes.STRING, allowNull: true },
        email: { type: DataTypes.STRING, allowNull: false },
        phone: { type: DataTypes.STRING(15), allowNull: true },
        birthday: { type: DataTypes.DATE, allowNull: true },
        e_approved: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        p_approved: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    })
}