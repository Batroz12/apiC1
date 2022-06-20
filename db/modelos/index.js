const { REPUESTO_TABLE, RepuestoSchema, Repuesto } = require('./repuesto.model');
const { ACCESORIO_TABLE, AccesorioSchema, Accesorio } = require('./accesorio.model');
const { ADMINISTRADOR_TABLE, AdministradorSchema, Administrador } = require('./administrador.model');
const { AUTO_TABLE, AutoSchema, Auto } = require('./auto.model');
const { CLIENTE_TABLE, ClienteSchema, Cliente } = require('./cliente.model');
const { CONCESIONARIO_TABLE, ConcesionarioSchema, Concesionario } = require('./concesionario.model');
const { COTIZACION_TABLE, CotizacionSchema, Cotizacion } = require('./cotizacion.model');
const { Postventa_TABLE, PostventaSchema, Postventa } = require('./postVenta.model');
const { USUARIO_TABLE, UsuarioSchema, Usuario } = require('./usuario.model');

function setupModels(sequelize){
  Repuesto.init(RepuestoSchema, Repuesto.config(sequelize));
  Accesorio.init(AccesorioSchema, Accesorio.config(sequelize));
  Administrador.init(AdministradorSchema, Administrador.config(sequelize));
  Auto.init(AutoSchema, Auto.config(sequelize));
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Concesionario.init(ConcesionarioSchema, Concesionario.config(sequelize));
  Cotizacion.init(CotizacionSchema, Cotizacion.config(sequelize));
  Postventa.init(PostventaSchema, Postventa.config(sequelize));
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
}

module.exports = {setupModels}
