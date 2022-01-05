const { Subscription } = require('../../database/models');

class SubscriptionController {
  async handle({ userId, limit }) {
    return Subscription.findAll({ where: { userId }, limit });
  }
}

module.exports = SubscriptionController;
