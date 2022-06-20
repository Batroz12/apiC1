const { required } = require("joi");
const Joi = require("joi");

const id = Joi.string().uuid();
const nombre = Joi.string().min(3).max(30);
const precio = Joi.number().min(4);

const crearRepuestoSchema = Joi.object({
  nombre: nombre.required(),
  precio: precio.required()
});

const actualizarRepuestoSchema = Joi.object({
  id : id.required(),
  nombre,
  precio
});

const eliminarRepuestoSchema = Joi.object({
  id : id.required()
});


const findByRepuestoSchema = Joi.object({
  id : id.required()
});

module.exports = {crearRepuestoSchema,actualizarRepuestoSchema,eliminarRepuestoSchema,findByRepuestoSchema};
