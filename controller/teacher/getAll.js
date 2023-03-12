const Joi = require("joi");

const query_schema = Joi.object({
});

const handler = async (req, res) => {
  return await req.context.getTeachers();
};

module.exports = { handler, query_schema };
