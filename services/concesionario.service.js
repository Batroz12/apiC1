const boom = require("@hapi/boom");
const crypto = require("crypto");

const { models } = require("../libs/sequelize");

class concesionarioservice{
  constructor(){
  }

  async create(concesionario) {
    const nuevoConcesionario={
      id: crypto.randomUUID(),
      ...concesionario
    }
    const salida = await models.concesionario.create(nuevoConcesionario);
    return salida;
  }

  async update(id, concesionario) {
    return concesionario;
  }

  async updateParcial(id, concesionarioParcial) {
    return concesionarioParcial;
  }

  async delete(id) {
    // const data = await models.repuesto.drop(nuevoRepuesto);
    return id;
  }

  async findAll() {
    const data = await models.concesionario.findAll();
    return data;
  }

  async findBy(id) {
    const data = await models.concesionario.findByPk(id);
    return data;
  }
}

module.exports = concesionarioservice;
