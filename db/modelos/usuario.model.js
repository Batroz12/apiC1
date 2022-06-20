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
    allowNull: false,
    references: {
      model: 'cliente'
    }
  },
};

class Usuario extends Model {
  static associate(models){
    this.belongsTo(models.cliente, {
      as: 'cliente'
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
