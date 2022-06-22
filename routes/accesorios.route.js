const express = require("express");
const controlValidar = require('../middlewares/validar.middleware');
const {crearAccesorioSchema,actualizarAccesorioSchema,eliminarAccesorioSchema,findByAccesorioSchema} = require("../schemas/usuario.schema");
const AccesorioService = require('../services/accesorios.service');
const servicio = new AccesorioService();
const router = express.Router();

//Metodos
router.get('/', async (req, res, next) => {
  try {
  const accesorio = await servicio.findAll();
  res.status(200).json(accesorio);
  } catch (error) {
    next(error)
  }
});

router.post('/', controlValidar(crearAccesorioSchema, 'body'), async (req, res, next) => {
  try {
    const body = req.body;
    const accesorio = await servicio.create(body);
    res.status(201).json({
      mensaje: 'registro exitoso',
      datos: accesorio
    });
  } catch (error) {
    next(error)
  }
});

router.put('/:id', controlValidar(actualizarAccesorioSchema, 'body'),async(req,res,next) => {
  try {
    const { id }= req.params;
      const body = {
        id: id,
        ...req.body
      }
      const Accesorio =await servicio.update(id,body);
      res.status(200).json({
        mensaje: 'Accesorio actualizado',
        datos: Accesorio
      });
  } catch (error) {
    next(error)
  }

});

router.patch('/:id',controlValidar(actualizarAccesorioSchema, 'body'), async (req,res, next) => {
  try {
    const { id }= req.params;
      const body = {
        id: id,
        ...req.body
      }
      const Accesorio =await servicio.update(id,body);
      res.status(200).json({
        mensaje: 'Accesorio parcialmente actualizado',
        datos: Accesorio
      });
  } catch (error) {
    next(error)
  }
});

router.delete('/:id',controlValidar(findByAccesorioSchema, 'params'), async (req,res, next)=> {
  try {
    const {id} = req.params;
    const AccesorioEliminado = await servicio.delete(id);
    res.status(200).json({
    mensaje :('Accesorio eliminado'),
    });
  } catch (error) {
    next(error)

  }
});

router.get('/:id', controlValidar(findByAccesorioSchema, 'params') , async(req, res, next) => {
  try {
    const { id } = req.params;
    const Accesorio = await servicio.findBy(id);
    res.json(Accesorio);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
