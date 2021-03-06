const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Race.hasMany(models.User);
    }
  }

  Race.init(
    {
      distance: DataTypes.FLOAT,
      startTime: DataTypes.FLOAT,
      endTime: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Race',
    },
  );
  return Race;
};
