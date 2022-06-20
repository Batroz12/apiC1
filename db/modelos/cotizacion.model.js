const { Model, Sequelize, DataTypes } = require('sequelize');

const COTIZACION_TABLE = 'cotizacion';

const CotizacionSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  clienteId: {
    type: DataTypes.UUID,
    field: 'cliente_id',
    allowNull: false,
    references: {
      model: 'cliente'
    }
  },
  autoId: {
    type: DataTypes.UUID,
    field: 'auto_id',
    allowNull: false,
    references: {
      model: 'auto'
    }
  }
  
  
};

class Cotizacion extends Model {
  static associate(models){
    this.belongsTo(models.cliente, {
      as: 'cliente'
    });
  }
  static associate(models){
    this.belongsTo(models.auto, {
      as: 'auto'
    });
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: COTIZACION_TABLE,
      modelName: 'cotizacion',
      timestamps: false
    };
  }
}
module.exports= { COTIZACION_TABLE, CotizacionSchema, Cotizacion }
