const joi = require('joi');
const Validator = require('./Validator');

class SubscriptionValidator extends Validator {
  rules = joi.object().keys({
    userId: joi.number().required(),
    subscriptionId: joi.number().required(),
  });
}

module.exports = SubscriptionValidator;
