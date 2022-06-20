const { Model, Sequelize, DataTypes } = require('sequelize');

const REPUESTO_TABLE = 'repuesto';

const RepuestoSchema = {
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Repuesto extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: REPUESTO_TABLE,
      modelName: 'repuesto',
      timestamps: false
    };
  }
}
module.exports= { REPUESTO_TABLE, RepuestoSchema, Repuesto }
