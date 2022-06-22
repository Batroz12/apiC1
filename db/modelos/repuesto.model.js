const { Model, Sequelize, DataTypes } = require('sequelize');

const REPUESTO_TABLE = 'repuesto';

const RepuestoSchema = {
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

class Repuesto extends Model {
  static associate(models){
    this.belongsTo(models.concesionario, {
      as: 'concesionario'
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: REPUESTO_TABLE,
      modelName: 'repuesto',
      timestamps: false
    };
  }
}
module.exports= { REPUESTO_TABLE, RepuestoSchema, Repuesto }
