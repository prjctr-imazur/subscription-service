const { validate } = require('../middleware/validation');
const { respond } = require('../helpers/respond');

const SubscriptionValidator = require('../validators/SubscriptionValidator');
const SubscriptionController = require('../controllers/SubscriptionController');

const CreateSubscriptionValidator = require('../validators/CreateSubscriptionValidator');
const CreateSubscriptionController = require('../controllers/CreateSubscriptionController');

const ForeverCacheDecorator = require('../../decorators/ForeverCacheDecorator');
const RemoveCacheDecorator = require('../../decorators/RemoveCacheDecorator');

function register(router) {
  router.get(
    '/subscriptions',
    validate(new SubscriptionValidator()),
    async (ctx) => {
      const { userId, limit = 20 } = ctx.request.query;

      const controller = new ForeverCacheDecorator(
        new SubscriptionController(),
        `users.${userId}.subscriptions`
      );

      const data = await controller.handle({ userId, limit });

      respond(ctx, data);
    }
  );

  router.post(
    '/subscriptions',
    validate(new CreateSubscriptionValidator()),
    async (ctx) => {
      const { userId, subscriptionId } = ctx.request.body;

      const controller = new RemoveCacheDecorator(
        new CreateSubscriptionController(),
        `users.${userId}.subscriptions`
      );

      const data = await controller.handle({ userId, subscriptionId });

      return data ? respond(ctx, data) : respond(ctx, null, 404);
    }
  );
}

module.exports = { register };
