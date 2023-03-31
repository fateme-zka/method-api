const Base = require("./Base");

module.exports = (sequelize, DataTypes) => {
    return Base(sequelize, DataTypes, "gallery", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
		gallery_categroy_id: { type: DataTypes.INTEGER, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
		image: { type: DataTypes.STRING, allowNull: true },
		date: { type: 'TIMESTAMP', allowNull: true },
		description: { type: DataTypes.STRING, allowNull: true },
    })
}