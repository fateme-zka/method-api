const Base = require("./Base");
const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	return Base(sequelize, DataTypes, "theater", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
		title: { type: DataTypes.STRING, allowNull: false },
		director: { type: DataTypes.STRING, allowNull: true },
		director_assistant: { type: DataTypes.STRING, allowNull: true },
		writer: { type: DataTypes.STRING, allowNull: true },
		producer: { type: DataTypes.STRING, allowNull: true },
		actors: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: true }, // todo check
		script_supervisor: { type: DataTypes.STRING, allowNull: true },
		planning_manager: { type: DataTypes.STRING, allowNull: true },
		production_manager: { type: DataTypes.STRING, allowNull: true },
		production_assistant: { type: DataTypes.STRING, allowNull: true },
		stage_manager: { type: DataTypes.STRING, allowNull: true },
		stage_assistant: { type: DataTypes.STRING, allowNull: true },
		set_designer: { type: DataTypes.STRING, allowNull: true }, 
		costume_designer: { type: DataTypes.STRING, allowNull: true },
		poster_designer: { type: DataTypes.STRING, allowNull: true },
		photographer: { type: DataTypes.STRING, allowNull: true },
		music: { type: DataTypes.STRING, allowNull: true },
		lighting: { type: DataTypes.STRING, allowNull: true },
		method: { type: DataTypes.STRING, allowNull: true },
		event_date: { type: DataTypes.DATE, allowNull: true },
		schedule: { type: DataTypes.STRING, allowNull: true },
		location: { type: DataTypes.STRING, allowNull: true },
		ticket_price: { type: DataTypes.BIGINT, allowNull: true },
		summary: { type: DataTypes.STRING, allowNull: true },
		image: { type: DataTypes.STRING, allowNull: true },
		description: { type: DataTypes.STRING, allowNull: true },
	})
}