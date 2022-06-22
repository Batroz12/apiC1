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
  concesionarioid: {
    type: DataTypes.UUID,
    field: 'concesionario_id',
    allowNull: true,
    references:{
      model: 'concesionario'
    }
  }
};
class Auto extends Model {
  static associate(models){
    this.belongsTo(models.concesionario, {
      as: 'concesionario'
    })
  }
  static associate(models){
    this.hasMany(models.cotizacion, {
      foreignKey: 'autoId'
    });
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
