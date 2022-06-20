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
  administradorid: {
    type: DataTypes.UUID,
    field: 'administrador_id',
    allowNull: false,
    references:{
      model: 'administrador'
    }

  }
};
class Concesionario extends Model {
  static associate(models){
    this.belongsTo(models.administrador, {
      as: 'administrador'
    });
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
