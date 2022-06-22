const { Model, Sequelize, DataTypes } = require('sequelize');

const ADMINISTRADOR_TABLE = 'administrador';

const AdministradorSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: true,
    type: DataTypes.STRING
  },
  apellido: {
    allowNull: true,
    type: DataTypes.STRING
  },
  correo: {
    allowNull: false,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  concesionarioId: {
    type: DataTypes.UUID,
    field: 'concesionario_id',
    allowNull: true,
    references: {
      model: 'concesionario'
    }
  }
};

class Administrador extends Model {
  static associate(models){
    this.hasOne(models.usuario, {
      foreignKey: 'administradorId'
    })
  }
  static associate(models){
    this.belongsTo(models.concesionario, {
      as: 'concesionario'
    })
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
