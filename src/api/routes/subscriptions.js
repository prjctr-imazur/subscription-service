const { validateBody, validateQuery } = require('../middleware/validation');

const SubscriptionValidator = require('../validators/SubscriptionValidator');
const SubscriptionController = require('../controllers/SubscriptionController');

const CreateSubscriptionValidator = require('../validators/CreateSubscriptionValidator');
const CreateSubscriptionController = require('../controllers/CreateSubscriptionController');

function register(router) {
  router.get(
    '/subscriptions',
    validateQuery(new SubscriptionValidator()),
    async (ctx) => {
      const controller = new SubscriptionController();

      const data = await controller.handle(ctx.request.query);

      ctx.body = { data };
    }
  );

  router.post(
    '/subscriptions',
    validateBody(new CreateSubscriptionValidator()),
    async (ctx) => {
      const controller = new CreateSubscriptionController();

      const data = await controller.handle(ctx.request.body);

      ctx.body = { data };
    }
  );
}

module.exports = { register };
