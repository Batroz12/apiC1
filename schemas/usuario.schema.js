const Joi = require('joi')

const id = Joi.string().uuid()
const Correo = Joi.string().email();
const Password = Joi.string().min(1).max(30);

const crearUsuarioSchema = Joi.object({
  // id: id.required(),
  Correo: Correo.required(),
  Password: Password.required(),
})

const actualizarUsuarioSchema = Joi.object({
  // id: id.required(),
  Correo,
  Password,
})

const findByUsuarioSchema = Joi.object({
  id: id.required()
})
module.exports = {crearUsuarioSchema,actualizarUsuarioSchema,findByUsuarioSchema}
