const boom = require("@hapi/boom");
const crypto = require("crypto");
const { models } = require("../libs/sequelize");

class clienteService{
  constructor(){
  }
  async create(cliente){
    const nuevoCliente= {
    id : crypto.randomUUID(),
    ...cliente
    }
    const salida = await models.cliente.create(nuevoCliente);
    return salida;
  }

  async update(id,Usuario){
    return Usuario;
  }

  async updateParcial(id,UsuarioParcial){
    return UsuarioParcial;
  }

  async delete(id){
    return id;
  }

  async findAll(){
    const data = await models.cliente.findAll();
    return data;
  }
  async findBy(id){
    const data = await models.cliente.findByPk(id);
    return data;
  }
}

module.exports = clienteService
