const Joi = require('joi');

const schemas = {
    user: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        country: Joi.string().required()
    })

}
const ReqValidator = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        const valid = error == null;

        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');

            console.log("error", message);
            res.status(422).json({ success: false, error: message })
        }
    }
}



module.exports = { schemas, ReqValidator };