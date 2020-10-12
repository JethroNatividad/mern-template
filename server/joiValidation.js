const Joi = require('joi');

exports.validateSignup = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().min(2),
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(6),
  });
  return schema.validate(data);
};
exports.validateSignin = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(6),
  });
  return schema.validate(data);
};