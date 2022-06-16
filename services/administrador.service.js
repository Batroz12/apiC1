const faker = require("faker")
class administradorService{
  constructor(){
    this.administrador = []
    this.generarAdministrador()
  }
  generarAdministrador(){
     const limite = 10
     for (let index = 0; index < limite; index++) {
       this.administrador.push({
        id: faker.datatype.uuid(),
        correo: faker.internet.email(),
        contraseña: faker.internet.password(),
       })
     }
  }
  create(Administrador){
    Administrador.id = faker.datatype.uuid();
    this.administrador.push(Administrador)
  }
  update(id,Administrador){
    const posicion = this.administrador.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("administrador no encontrado");
    }
    this.administrador[posicion] = Administrador;
    return this.administrador[posicion];
  }
  delete(id){
    const posicion = this.administrador.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Administrador no encontrado");
    }
    this.administrador.splice(posicion, 1);
    return {
      mensaje: "operacion realizada",
      id
    };
  }
  findAll(){
    return this.administrador
  }
  findBy(id){
    return this.administrador.find(item => item.codE === id)
  }
}

module.exports = administradorService
