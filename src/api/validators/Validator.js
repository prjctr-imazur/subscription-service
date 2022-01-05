const joi = require('joi');
const { reduce, set } = require('lodash');

class Validator {
  before() {
    if (!this.rules) {
      throw new Error(
        `Did you forget describe the validation rules inside '${this.constructor.name}'`
      );
    }

    if (!joi.isSchema(this.rules)) {
      throw new Error('Rules should be an instance of Joi schema');
    }
  }

  after(values, errors) {
    return { values, errors };
  }

  errors(err) {
    if (joi.isError(err)) {
      return reduce(
        err?.details,
        (reduction, current) => set(reduction, current?.path, current?.message),
        {}
      );
    }
    throw err;
  }

  async validate(input) {
    this.before();
    try {
      await this.rules.validateAsync(input);
    } catch (error) {
      return this.after(input, this.errors(error));
    }
    return this.after(input, null);
  }
}

module.exports = Validator;
