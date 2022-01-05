const joi = require('joi');
const Validator = require('./Validator');

class CreateSubscriptionValidator extends Validator {
  rules = joi.object().keys({
    userId: joi.number().positive().required(),
    subscriptionId: joi.number().positive().required(),
  });
}

module.exports = CreateSubscriptionValidator;
