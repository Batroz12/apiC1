const { Model, Sequelize, DataTypes } = require('sequelize');

const POSTVENTA_TABLE = 'postventa';

const PostventaSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Postventa extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: POSTVENTA_TABLE,
      modelName: 'postventa',
      timestamps: false
    };
  }
}
module.exports= { POSTVENTA_TABLE, PostventaSchema, Postventa }
