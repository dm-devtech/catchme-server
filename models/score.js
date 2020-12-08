"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Score.belongsTo(models.Race, { foreignKey: "raceId" });
      Score.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Score.init(
    {
      time: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Score",
    }
  );
  return Score;
};
