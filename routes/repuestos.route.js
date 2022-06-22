const express = require("express");
const Repuestoservice = require('../services/repuestos.service')
const servicio = new Repuestoservice();
const router = express.Router();

const controlValidar = require('../middlewares/validar.middleware');
const {
  crearRepuestoSchema,
  actualizarRepuestoSchema,
  findByRepuestoSchema,
  eliminarRepuestoSchema,
} = require('../schemas/repuesto.schema');

// GET --> Mostrar
router.get('/',async (req, res, next) => {
  try {
  const repuesto = await servicio.findAll();
  res.status(200).json(repuesto);
  } catch (error) {
    next(error)
  }
});

// POST --> Crear
router.post(
  '/',
  controlValidar(crearRepuestoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = await req.body;
      servicio.create(body);
      res.status(201).json({
        mensaje: 'Repuesto registrado con exito',
        datos: body,
      });
    } catch (error) {
      next(error)
    }
});

// PUT --> Actualizar
router.put(
  '/:id',
  controlValidar(actualizarRepuestoSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const body = req.body;
      const repuesto = await servicio.update(id, body);
      res.status(200).json(repuesto);
    } catch (error) {
      res.status(404).json({
        mensaje: error.message,
      });
    }
  }
);

// DELETE --> Eliminar
router.delete('/:id',controlValidar(eliminarRepuestoSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const salida = servicio.delete(id);
    res.json(salida);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',controlValidar(findByRepuestoSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const repuesto = await servicio.findBy(id);
    res.status(200).json(repuesto);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
