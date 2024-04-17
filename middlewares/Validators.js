const Joi = require('joi');

exports.middlewareCreateUser = () => {
    return (req, res, next) => {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required()
        });

        const validation = schema.validate(req.body, { abortEarly: false });

        if(!validation.error) {
            next();
        }
        else {
            //console.log(validation.error);
            const { details } = validation.error;
            const message = details.map(i => i.message).join(',');
            console.log(message);
            return res.status(422).json({ error : message })
        }
    }
}