const { Model, Sequelize, DataTypes } = require('sequelize');

const CLIENTE_TABLE = 'cliente';

const ClienteSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING
  },
  correo: {
    allowNull: true,
    type: DataTypes.STRING
  },
  dni: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Cliente extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CLIENTE_TABLE,
      modelName: 'cliente',
      timestamps: false
    };
  }
}
module.exports= { CLIENTE_TABLE, ClienteSchema, Cliente }
