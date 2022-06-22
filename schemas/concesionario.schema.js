const Joi = require('joi')

const id = Joi.string().uuid()
const Sede = Joi.string().min(1).max(30);
const Servicio = Joi.string().min(1).max(30);

const crearConcesionarioSchema = Joi.object({
  // id: id.required(),
  Sede: Sede.required(),
  Servicio: Servicio.required(),
})

const actualizarConcesionarioSchema = Joi.object({
  // id: id.required(),
  Sede,
  Servicio
})

const findByConcesionarioSchema = Joi.object({
  id: id.required()
})
module.exports = {crearConcesionarioSchema,actualizarConcesionarioSchema,findByConcesionarioSchema}
