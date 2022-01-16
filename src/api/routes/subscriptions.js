const { validate } = require('../middleware/validation');
const respond = require('../helpers/respond');

const SubscriptionValidator = require('../validators/SubscriptionValidator');
const SubscriptionController = require('../controllers/SubscriptionController');

const CreateSubscriptionValidator = require('../validators/CreateSubscriptionValidator');
const CreateSubscriptionController = require('../controllers/CreateSubscriptionController');

function register(router) {
  router.get(
    '/subscriptions',
    validate(new SubscriptionValidator()),
    async (ctx) => {
      const controller = new SubscriptionController();

      const data = await controller.handle(ctx.request.query);

      respond.success(ctx, data);
    }
  );

  router.post(
    '/subscriptions',
    validate(new CreateSubscriptionValidator()),
    async (ctx) => {
      const controller = new CreateSubscriptionController();

      const data = await controller.handle(ctx.request.body);

      return data ? respond.success(ctx, data) : respond.notfound(ctx);
    }
  );
}

module.exports = { register };
