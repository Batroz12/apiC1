// const faker = require("faker")
const boom = require("@hapi/boom");
const crypto = require("crypto");

// const getConnection = require("../libs/postgres");
// const pool = require("../libs/postgres.pool");
const sequelize = require("../libs/sequelize");

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
    const { id, Correo, Password } = nuevoUsuario;
    const query = "insert into usuario (id, correo, password) values('"+ id +"','"+ Correo +"','"+ Password +"')";
    await sequelize.query(query);
    // const cliente = await getConnection();
    // await cliente.query("insert into productos (id, correo, password) values('"+ id +"','"+ correo +"','"+ password +"')");
    return nuevoUsuario;
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
    const query = 'select * from usuario';
    const [data] = await sequelize.query(query);
    // const cliente = await getConnection();
    // const salida = await cliente.query('select * from usuario');
    return data;
  }
  async findBy(id){
    return id;
  }
}

module.exports = usuarioService
