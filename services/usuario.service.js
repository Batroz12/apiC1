const faker = require("faker")
class usuarioService{
  constructor(){
    this.usuario = []
    this.generarUsuario()
  }
  generarUsuario(){
     const limite = 10
     for (let index = 0; index < limite; index++) {
       this.usuario.push({
        id: faker.datatype.uuid(),
        Correo: faker.internet.email(),
        Password: faker.internet.password(),
       })
     }
  }
  create(Usuario){
    Usuario.id = faker.datatype.uuid();
    this.usuario.push(Usuario)
  }
  update(id,Usuario){
    const posicion = this.usuario.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("usuario no encontrado");
    }
    this.usuario[posicion] = Usuario;
    return this.usuario[posicion];
  }
  delete(id){
    const posicion = this.usuario.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Usuario no encontrado");
    }
    this.usuario.splice(posicion, 1);
    return {
      mensaje: "Usuario eliminado",
      id
    };
  }
  findAll(){
    return this.usuario
  }
  findBy(id){
    return this.usuario.find(item => item.codE === id)
  }
}

module.exports = usuarioService
