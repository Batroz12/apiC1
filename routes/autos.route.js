const express = require("express");
const controlValidar = require('../middlewares/validar.middleware');
const {crearAutoSchema,actualizarAutoSchema,eliminarAutosSchema,findByAutoSchema}= require("../schemas/auto.schema");
const AutoService = require('../services/autos.service')
const servicio = new AutoService();
const router = express.Router();

//Metodos
router.get('/', async (req, res, next) => {
  try {
    const Auto = await servicio.findAll();
    res.status(200).json(Auto);
    } catch (error) {
      next(error)
  }
});

router.post('/', controlValidar(crearAutoSchema, 'body'), async(req, res, next) => {
  try {
    const body = req.body;
    const auto = await servicio.create(body);
    res.status(201).json({
      mensaje: 'registro exitoso',
      datos: auto
    });
  } catch (error) {
    next(error)
  }
});

router.put('/:id',controlValidar(actualizarAutoSchema, 'body'),async (req, res, next) => {
  try {
    const { id }= req.params;
      const body = {
        id: id,
        ...req.body
      }
      const Auto =await servicio.update(id,body);
      res.status(200).json({
        mensaje: 'Auto actualizado',
        datos: Auto
      });
  } catch (error) {
    next(error)
  }
});

router.patch('/:id',controlValidar(actualizarAutoSchema, 'body'),async (req, res, next) => {
  try {
    const { id }= req.params;
      const body = {
        id: id,
        ...req.body
      }
      const Auto =await servicio.update(id,body);
      res.status(200).json({
        mensaje: 'Auto parcialmente actualizado',
        datos: Auto
      });
  } catch (error) {
    next(error)
  }
});

router.delete('/:id',controlValidar(findByAutoSchema, 'params'), async (req,res, next)=> {
  try {
    const {id} = req.params;
    const AutoEliminado = await servicio.delete(id);
    res.status(200).json({
    mensaje :('auto eliminado'),
    });
  } catch (error) {
    next(error)
  }
});

router.get('/:id', controlValidar(findByAutoSchema, 'params') , async(req, res, next) => {
  try {
    const { id } = req.params;
    const Usuario = await servicio.findBy(id);
    res.json(Usuario);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
