const { Model, Sequelize, DataTypes } = require('sequelize');

const POSTVENTA_TABLE = 'postventa';

const PostventaSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  vehiculoAntiguoid: {
    type: DataTypes.UUID,
    field: 'vehiculo_antiguo_id',
    allowNull: true,
    references:{
      model: 'vehiculo_antiguo'
    }},
    clienteid: {
      type: DataTypes.UUID,
      field: 'cliente_id',
      allowNull: true,
      references:{
        model: 'cliente'
    }},
      concesionarioid: {
        type: DataTypes.UUID,
        field: 'concesionario_id',
        allowNull: true,
        references:{
          model: 'concesionario'
      }}
};

class Postventa extends Model {
  static associate(models){
    this.belongsTo(models.vehiculo_antiguo, {
      as: 'vehiculo_antiguo'
  });
  }
  static associate(models){
    this.belongsTo(models.cliente, {
      as: 'cliente'
    });
  }
  static associate(models){
    this.belongsTo(models.concesionario, {
      as: 'concesionario'
    });
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
