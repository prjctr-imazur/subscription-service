const Router = require('koa-router');

const health = require('./health');
const subscriptions = require('./subscriptions');

const router = new Router();

health.register(router);
subscriptions.register(router);

module.exports = router;
