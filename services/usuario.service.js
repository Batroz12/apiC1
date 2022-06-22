// const faker = require("faker")
const boom = require("@hapi/boom");
const crypto = require("crypto");

// const getConnection = require("../libs/postgres");
// const pool = require("../libs/postgres.pool");
const { models } = require("../libs/sequelize");

class usuarioService{
  constructor(){
    // this.usuario = []
    // this.generarUsuario()
    // this.pool=pool;
    // this.pool.on('error', (err) => console.log(err));
  }
  // generarUsuario(){
  //    const limite = 10
  //    for (let index = 0; index < limite; index++) {
  //      this.usuario.push({
  //       id: faker.datatype.uuid(),
  //       Correo: faker.internet.email(),
  //       Password: faker.internet.password(),
  //       esVisible: faker.datatype.boolean()
  //      })
  //    }
  // }
  async create(usuario){
    const nuevoUsuario= {
    id : crypto.randomUUID(),
    ...usuario
    }
    const salida = await models.usuario.create(nuevoUsuario);
    return salida;
    // const cliente = await getConnection();
    // await cliente.query("insert into productos (id, correo, password) values('"+ id +"','"+ correo +"','"+ password +"')");
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
    const data = await models.repuesto.findAll();
    return data;
    // const cliente = await getConnection();
    // const salida = await cliente.query('select * from usuario');
  }
  async findBy(id){
    const data = await models.repuesto.findByPk(id);
    return data;
  }
}

module.exports = usuarioService
