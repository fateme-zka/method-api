const Joi = require("joi");

const query_schema = Joi.object({
});

const handler = async (req, res) => {
  return await req.context.getWorkshops();
};

module.exports = { handler, query_schema };
