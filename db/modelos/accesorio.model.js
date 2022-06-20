const { Model, Sequelize, DataTypes } = require('sequelize');

const ACCESORIO_TABLE = 'accesorio';

const AccesorioSchema = {
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

class Accesorio extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ACCESORIO_TABLE,
      modelName: 'accesorio',
      timestamps: false
    };
  }
}
module.exports= { ACCESORIO_TABLE, AccesorioSchema, Accesorio }
