const { Model, Sequelize, DataTypes } = require('sequelize');

const VEHICULO_ANTIGUO_TABLE = 'vehiculo_antiguo';

const Vehiculo_AntiguoSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  precio: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  imagen: {
    allowNull: true,
    type: DataTypes.STRING
  },
};

class Vehiculo_Antiguo extends Model {
  static associate(models){
    this.hasMany(models.postventa, {
      foreignKey: 'vehiculoAntiguoid'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: VEHICULO_ANTIGUO_TABLE,
      modelName: 'vehiculo_antiguo',
      timestamps: false
    };
  }
}
module.exports= { VEHICULO_ANTIGUO_TABLE, Vehiculo_AntiguoSchema, Vehiculo_Antiguo}
