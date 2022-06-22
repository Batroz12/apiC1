const Joi = require("joi");

const id = Joi.string().uuid();
const nombre = Joi.string().min(3).max(30);
const imagen = Joi.string().min(5).max(100);
const precio = Joi.number().min(4);

const crearAccesorioSchema = Joi.object({
  nombre: nombre.required(),
  precio: precio.required(),
  imagen: imagen.required()
});

const actualizarAccesorioSchema = Joi.object({
  id : id.required(),
  nombre,
  precio
});

const eliminarAccesorioSchema = Joi.object({
  id : id.required()
});


const findByAccesorioSchema = Joi.object({
  id : id.required()
});

module.exports = {crearAccesorioSchema,actualizarAccesorioSchema,eliminarAccesorioSchema,findByAccesorioSchema};
