const { Subscription } = require('../../database/models');

class SubscriptionController {
  async handle({ userId, limit = 20 }) {
    return Subscription.findAll({ where: { userId }, limit });
  }
}

module.exports = SubscriptionController;
