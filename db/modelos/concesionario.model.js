const { Model, Sequelize, DataTypes } = require('sequelize');

const CONCESIONARIO_TABLE = 'concesionario';

const ConcesionarioSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  sede: {
    allowNull: false,
    type: DataTypes.STRING
  },
  servicio: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};
class Concesionario extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CONCESIONARIO_TABLE,
      modelName: 'concesionario',
      timestamps: false
    };
  }
}
module.exports= { CONCESIONARIO_TABLE, ConcesionarioSchema, Concesionario }
