'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dosen.init(
    {
      nama: DataTypes.STRING,
      nidn: DataTypes.STRING,
      tempat_lahir: DataTypes.STRING,
      tgl_lahir: DataTypes.STRING,
      no_hp: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: 'Dosen',
      tableName: 'dosen',
    },
  );
  return Dosen;
};
