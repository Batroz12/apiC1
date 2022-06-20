const { Model, Sequelize, DataTypes } = require('sequelize');

const COTIZACION_TABLE = 'cotizacion';

const CotizacionSchema = {
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

class Cotizacion extends Model {
  static associate(){

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
