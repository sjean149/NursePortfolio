const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Experience extends Model {}

Experience.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    organization: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dates: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    responsibilities: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    sequelize,
    modelName: "Experience",
    tableName: "experiences",
    timestamps: true,
  },
);

module.exports = Experience;
