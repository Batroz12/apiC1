const { Model, Sequelize, DataTypes } = require('sequelize');

const AUTO_TABLE = 'auto';

const AutoSchema = {
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

class Auto extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: AUTO_TABLE,
      modelName: 'auto',
      timestamps: false
    };
  }
}
module.exports= { AUTO_TABLE, AutoSchema, Auto }
