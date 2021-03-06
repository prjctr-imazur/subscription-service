const HealthController = require('../controllers/HealthController');

function register(router) {
  router.get('/subscriptions/health', async (ctx) => {
    const controller = new HealthController();

    ctx.body = await controller.handle();
  });
}

module.exports = { register };
