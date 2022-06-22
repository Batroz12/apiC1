const express = require("express");
const controlValidar = require('../middlewares/validar.middleware');
const {crearClienteSchema,actualizarClienteSchema,findByClienteSchema} = require("../schemas/cliente.schema");
const clienteService = require('../services/cliente.service');
const servicio = new clienteService();
const router = express.Router();

//Metodos
router.get('/', async (req, res, next) => {
  try {
  const Cliente = await servicio.findAll();
  res.status(200).json(Cliente);
  } catch (error) {
    next(error)
  }
});

router.post('/', controlValidar(crearClienteSchema, 'body'), async(req, res, next) => {
  try {
    const body = req.body;
    const cliente = await servicio.create(body);
    res.status(201).json({
      mensaje: 'registro exitoso',
      datos: cliente
    });
  } catch (error) {
    next(error)
  }
});

router.put('/:id',controlValidar(actualizarClienteSchema, 'body'),async (req, res, next) => {
  try {
    const { id }= req.params;
      const body = {
        id: id,
        ...req.body
      }
      const Cliente =await servicio.update(id,body);
      res.status(200).json({
        mensaje: 'Cliente actualizado',
        datos: Cliente
      });
  } catch (error) {
    next(error)
  }
});

router.patch('/:id',controlValidar(actualizarClienteSchema, 'body'),async (req, res, next) => {
  try {
    const { id }= req.params;
      const body = {
        id: id,
        ...req.body
      }
      const Cliente =await servicio.update(id,body);
      res.status(200).json({
        mensaje: 'Cliente parcialmente actualizado',
        datos: Cliente
      });
  } catch (error) {
    next(error)
  }
});

router.delete('/:id',controlValidar(findByClienteSchema, 'params'), async (req,res, next)=> {
  try {
    const {id} = req.params;
    const ClienteEliminado = await servicio.delete(id);
    res.status(200).json({
    mensaje :('Cliente eliminado'),
    });
  } catch (error) {
    next(error)
  }
});

router.get('/:id', controlValidar(findByClienteSchema, 'params') , async(req, res, next) => {
  try {
    const { id } = req.params;
    const Cliente = await servicio.findBy(id);
    res.json(Cliente);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
