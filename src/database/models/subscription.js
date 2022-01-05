const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    static associate() {}
  }
  Subscription.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      subscriptionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Subscription',
      tableName: 'subscriptions',
    }
  );
  return Subscription;
};
