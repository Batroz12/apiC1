const Joi = require('joi')

const id = Joi.string().uuid()
const Correo = Joi.string().email();
const Nombre = Joi.string().min(1).max(30);
const Apellido = Joi.string().min(1).max(30);
const Password = Joi.string().min(1).max(30);
const DNI = Joi.string().min(1).max(30);

const crearClienteSchema = Joi.object({
  // id: id.required(),
  Correo: Correo.required(),
  Nombre: Nombre.required(),
  Apellido: Apellido.required(),
  Password: Password.required(),
  DNI: DNI.required()
})

const actualizarClienteSchema = Joi.object({
  // id: id.required(),
  Correo,
  Nombre,
  Apellido,
  Password,
  DNI
})

const findByClienteSchema = Joi.object({
  id: id.required()
})
module.exports = {crearClienteSchema,actualizarClienteSchema,findByClienteSchema}
