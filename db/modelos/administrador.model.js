const { Model, Sequelize, DataTypes } = require('sequelize');

const ADMINISTRADOR_TABLE = 'administrador';

const AdministradorSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  correo: {
    allowNull: false,
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

class Administrador extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ADMINISTRADOR_TABLE,
      modelName: 'administrador',
      timestamps: false
    };
  }
}
module.exports= { ADMINISTRADOR_TABLE, AdministradorSchema, Administrador }
