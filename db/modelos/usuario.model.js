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
  clienteId: {
    type: DataTypes.UUID,
    field: 'cliente_id',
    allowNull: true,
    references: {
      model: 'cliente'
    }
  },
  administradorId: {
    type: DataTypes.UUID,
    field: 'administrador_id',
    allowNull: true,
    references: {
      model: 'administrador'
    }
  }
};

class Usuario extends Model {
  static associate(models){
    this.belongsTo(models.cliente, {
      as: 'cliente'
    });
  }
  static associate(models){
    this.belongsTo(models.administrador, {
      as: 'administrador'
    });
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
