const { Model, Sequelize, DataTypes } = require('sequelize');

const CONCESIONARIO_TABLE = 'concesionario';

const ConcesionarioSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  sede: {
    allowNull: false,
    type: DataTypes.STRING
  },
  servicio: {
    allowNull: false,
    type: DataTypes.STRING
  }
};
class Concesionario extends Model {
  static associate(models){
    this.hasOne(models.administrador, {
      foreignKey: 'concesionarioId'
    });
  }
  static associate(models){
    this.hasMany(models.auto, {
      foreignKey: 'concesionarioid'
    });
  }
  static associate(models){
    this.hasMany(models.repuesto, {
      foreignKey: 'concesionarioid'
    });
  }
  static associate(models){
    this.hasMany(models.accesorio, {
      foreignKey: 'concesionarioid'
    });
  }
  static associate(models){
    this.hasMany(models.postventa, {
      foreignKey: 'concesionarioid'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CONCESIONARIO_TABLE,
      modelName: 'concesionario',
      timestamps: false
    };
  }
}
module.exports= { CONCESIONARIO_TABLE, ConcesionarioSchema, Concesionario }
