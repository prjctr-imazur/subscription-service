const joi = require('joi');
const RequestValidator = require('./RequestValidator');

class CreateSubscriptionValidator extends RequestValidator {
  rules = joi.object().keys({
    body: joi.object({
      userId: joi.number().positive().required(),
      subscriptionId: joi.number().positive().required(),
    }),
  });
}

module.exports = CreateSubscriptionValidator;
