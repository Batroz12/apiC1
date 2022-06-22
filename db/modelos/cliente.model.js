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
    allowNull: false,
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
    
  }
};

class Cliente extends Model {
  static associate(models){
    this.hasOne(models.usuario, {
      foreignKey: 'clienteId'
    });
  }
  static associate(models){
    this.hasMany(models.cotizacion, {
      foreignKey: 'clienteId'
    });
  }
  static associate(models){
    this.hasMany(models.postventa, {
      foreignKey: 'clienteid'
    });
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
