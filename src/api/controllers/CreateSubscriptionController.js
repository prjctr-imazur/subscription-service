const { Subscription } = require('../../database/models');

class CreateSubscriptionController {
  async handle(input) {
    return Subscription.create(input);
  }
}

module.exports = CreateSubscriptionController;
