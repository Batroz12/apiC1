// const faker = require("faker")
const boom = require("@hapi/boom");
const crypto = require("crypto");

const sequelize = require("../libs/sequelize");

class Repuestoservice{
  constructor(){
  //   this.repuestos=[{
  //     id: faker.datatype.uuid(),
  //     nombre: "LLantas PCR",
  //     imagen: "https://www.imporcadi.com/wp-content/uploads/2021/07/llanta-trailer.png",
  //     precio: "S/400"
  //   },
  //   {
  //     id: faker.datatype.uuid(),
  //     nombre: "Timones",
  //     imagen: "https://www.nicepng.com/png/full/338-3380707_mazda-gt-custom-steering-wheel.png",
  //     precio: "S/680"
  //   },
  //   {
  //     id: faker.datatype.uuid(),
  //     nombre: "Faroles",
  //     imagen: "https://scdn.autoersatzteile.de/catalog/categories/513x196/27.png?rev=94077826",
  //     precio: "S/1280"
  //   }
  // ]
  //   //this.GenerarDatos();
  }

  // GenerarDatos() {
  //   const size = 10;
  //   for (let index = 0; index < size; index++) {
  //     this.repuestos.push({
  //       id: faker.datatype.uuid(),
  //       nombre: faker.commerce.productName(),
  //       precio: parseInt(faker.commerce.price()),
  //       imagen: faker.image.imageUrl()
  //     });
  //   }
  // }

  async create(repuesto) {
    const nuevoRepuesto={
      id: crypto.randomUUID(),
      ...repuesto
    }
    const { id, nombre, precio}= nuevoRepuesto;
    const query= "insert into repuesto (id, nombre, precio) values('"+ id +"','"+ nombre +"',"+ precio +")";
    await sequelize.query(query);
    return nuevoRepuesto;
  }

  async update(id, repuesto) {
    return repuesto;
  }

  async updateParcial(id, repuestoParcial) {
    return repuestoParcial;
  }

  async delete(id) {
    return id;
  }

  async findAll() {
    const query = 'select * from repuesto';
    const [data] = await sequelize.query(query);
    return data;
  }

  async findBy() {
    return id;
  }
}

module.exports = Repuestoservice;
