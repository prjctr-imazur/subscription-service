const joi = require('joi');
const RequestValidator = require('./RequestValidator');

class SubscriptionValidator extends RequestValidator {
  rules = joi.object().keys({
    query: joi.object({
      userId: joi.number().required(),
    }),
  });
}

module.exports = SubscriptionValidator;
