const Joi = require('joi')
//Cliente
const Dni = Joi.string().min(8);
const Nombre = Joi.string().max(20);
const Apellido = Joi.string().max(25);
const Email = Joi.string().email();
const Telefono = Joi.string().min(9);
const Departamento = Joi.string().max(10);

//Vehiculo Antiguo
const Precio = Joi.number().min(4);
const Imagen = Joi.string().max(20);

//Concesionario 
const Sede = Joi.string().min(1).max(30);
const Servicio = Joi.string().min(1).max(30);

const crearpostVentaSchema = Joi.object({
})

const crearClienteSchema = Joi.object({
  Dni: Dni.required(),
  Nombre: Nombre.required(),
  Apellido: Apellido.required(),
  Email: Email.required(),
  Telefono: Telefono.required(),
  Departamento: Departamento.required(),
})

const crearVehiculo_AntiguoSchema = Joi.object({
  Nombre: Nombre.required(),
  Precio: Precio.required(),
  Imagen: Imagen.required(),
})

const crearConcesionarioSchema = Joi.object({
  // id: id.required(),
  Sede: Sede.required(),
  Servicio: Servicio.required(),
})

module.exports = {crearClienteSchema,crearVehiculo_AntiguoSchema,crearpostVentaSchema,crearConcesionarioSchema}
