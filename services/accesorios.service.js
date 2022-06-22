const boom = require("@hapi/boom");
const crypto = require("crypto");

const { models } = require("../libs/sequelize");

class AccesorioService{
  constructor(){
  //   this.accesorios=[{
  //     id: faker.datatype.uuid(),
  //     nombre: "Reproductor",
  //     imagen: "https://cdn.autoteiledirekt.de/thumb?id=15750846&m=0&n=0&lng=es&rev=94077826",
  //     precio: "S/2100"
  //   },
  //   {
  //     id: faker.datatype.uuid(),
  //     nombre: "Tapabucos",
  //     imagen: "https://media.autoteiledirekt.de/360_photos/16368508/preview.jpg",
  //   precio: "S/2680"
  //   },
  //   {
  //     id: faker.datatype.uuid(),
  //     nombre: "Cubre Asientos",
  //     imagen: "https://cdn.autoteiledirekt.de/thumb?id=13626718&m=0&n=0&lng=es&rev=94077826",
  //     precio: "S/280"
  //   }
  // ]
    //this.GenerarDatos();
  }
  async create(accesorio) {
    const nuevoAccesorio={
      id: crypto.randomUUID(),
      ...accesorio
    }
    const salida = await models.accesorio.create(nuevoAccesorio);
    return salida;
  }

  async update(id, accesorio) {
    const posicion = this.accesorios.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("accesorio no encontrado");
    }
    this.accesorios[posicion] = accesorio;
    return this.accesorios[posicion];
  }

  async updateParcial(id,AccesorioParcial){
    return AccesorioParcial;
  }

  async delete(id) {
    return id;
  }

  async findAll() {
    const data = await models.repuesto.findAll();
    return data;
  }

  async findBy(id) {
    const data = await models.repuesto.findByPk(id);
    return data;
  }
}

module.exports = AccesorioService;
