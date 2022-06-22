const boom = require("@hapi/boom");
const crypto = require("crypto");

const { models } = require("../libs/sequelize");

class AutoService{
  constructor(){
  //   this.auto=[{
  //     id: faker.datatype.uuid(),
  //     nombre: "4Runner",
  //     imagen: "https://www.toyotaperu.com.pe/sites/default/files/camioneta-4Runner-Toyota-4x4.png",
  //     precio: "S/23100"
  //   },
  //   {
  //     id: faker.datatype.uuid(),
  //     nombre: "Avanza",
  //     imagen: "https://www.toyotaperu.com.pe/sites/default/files/avanza-listado_0.png",
  //     precio: "S/82680"
  //   },
  //   {
  //     id: faker.datatype.uuid(),
  //     nombre: "Hilux",
  //     imagen: "https://www.toyotaperu.com.pe/sites/default/files/HILUX.png",
  //     precio: "S/160280"
  //   }
  // ]
    //this.GenerarDatos();
  }

  async create(auto) {
    const nuevoAuto={
      id: crypto.randomUUID(),
      ...auto
    }
    const salida = await models.auto.create(nuevoAuto);
    return salida;
  }

  async update(id, auto) {
    return auto;
  }

  async updateParcial(id, autoParcial) {
    return autoParcial;
  } 

  async delete(id) {
    return id;
  }

  async findAll() {
    const data = await models.auto.findAll();
    return data;
  }

  async findBy() {
    const data = await models.auto.findByPk(id);
    return data;
  }
}

module.exports = AutoService;
