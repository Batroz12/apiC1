const { Model, Sequelize, DataTypes } = require('sequelize');

const USUARIO_TABLE = 'usuario';

const UsuarioSchema = {
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

class Usuario extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'usuario',
      timestamps: false
    };
  }
}
module.exports= { USUARIO_TABLE, UsuarioSchema, Usuario }
