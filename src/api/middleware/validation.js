function makeRespond(ctx, errors) {
  ctx.status = 422;

  ctx.body = {
    errors,
  };
}

function validateBody(validator) {
  return async (ctx, next) => {
    const { errors } = await validator.validate(ctx.request.body);

    if (errors !== null) {
      makeRespond(ctx, errors);
      return;
    }

    await next();
  };
}

function validateQuery(validator) {
  return async (ctx, next) => {
    const { errors } = await validator.validate(ctx.request.query);

    if (errors !== null) {
      makeRespond(ctx, errors);

      return;
    }

    await next();
  };
}

module.exports = {
  validateBody,
  validateQuery,
};
