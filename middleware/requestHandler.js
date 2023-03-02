const Winston = require("../config/winston");
const Joi = require('joi');
const { error_operation } = require("../util/error_operation");
const Context = require('../Context');
const { token_parser } = require('../util/token_praser');

module.exports = (controller) => async (req, res) => {
    req.context = new Context();
    let result = {};
    let meta = {
        method: req.method,
        url: req.originalUrl,
        header: req.headers,
        body: req.body,
        start_time: new Date(),
        code: 200,
        message: "Success Message!",
    };

    try {
        // error pop up        
        req.throw = error_operation.throwError;

        // check for auth        
        if (controller.auth) {
            try {
                req.user = await token_parser(req, process.env.jwt_key);
            } catch (error) {
                if (!controller.auth_optional)
                    throw error;
            }
        }

		// check for auth_admin
		if (controller.auth_admin) {
            if (!req.user || !req.user.admin)
                req.throw(401, 'Admin user is required.');
        }

        // check for validation
        if (controller.body_schema) {
            const validation = await Joi.compile(controller.body_schema)
                .prefs({ errors: { label: 'key' } })
                .validate(req.body);
            if (validation.error) {
                let message = validation.error.details.map((details) => details.message).join(', ');
                req.throw(400, message);
            }
        }
        if (controller.query_schema) {
            const validation = await Joi.compile(controller.query_schema)
                .prefs({ errors: { label: 'key' } })
                .validate(req.query);
            if (validation.error) {
                let message = validation.error.details.map((details) => details.message).join(', ');
                req.throw(400, message);
            }
        }

        if (controller.handler)
            result = await controller.handler(req, res);
        if (result == null)
            result = "Success";
    } catch (error) {
        if (error.code === undefined) {
            error.code = 500;
        }
        meta.code = error.code;
        meta.message = error.message;
        meta.error = error;
        if (error.code)
            result = meta.message;
        else {
            result = "Sorry, internl server error.";
        }
    }
    meta.end_time = new Date();
    meta.duration = meta.end_time - meta.start_time;
    Winston.info(meta);
    return res.status(meta.code).send(result);
};