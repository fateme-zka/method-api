const Joi = require("joi");

const body_schema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	title: Joi.string().required(),
	description: Joi.string().required(),
});

const handler = async (req, res) => {
	let { name, email, title, description } = req.body;
	return await req.context.addMessage(name, email, title, description);
};

module.exports = { handler, body_schema };
