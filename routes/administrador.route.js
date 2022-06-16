const { json } = require("express");
const express = require("express");

const administradorService = require('../services/administrador.service')
const servicio = new administradorService();
const router = express.Router();

router.get('/', (req, res) => {
  const Administrador = servicio.findAll();
  res.status(200).json(Administrador);
});

router.post('/', (req, res) => {
  const body = req.body;
  servicio.create(body);
  res.status(201).json({
    mensaje: 'registro exitoso',
    datos: body
  });
});

router.put('/:id',async(req,res,) => {
  const { id }= req.params;
  try {
    const body = req.body;
    const Administrador =await servicio.update(id,body);
    res.status(200).json(Administrador);
  } catch (error) {
    res.status(404).json({
      mensaje: error.message
    });
  }
});

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body;
  servicio.update(id,body)
  res.status(200).json({
    mensaje: 'perfil parcialmente actualizado',
    datos: servicio.findBy(id)
  });
});

router.delete('/:id',(req,res)=> {
  const {id} = req.params;
  servicio.delete(id);
  res.json({
  mensaje :('perfil eliminado'),
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const Administrador = servicio.findBy(id);
  if (id == '10'){
    res.status(404).json(
      {
        mensaje: 'no se encuentra el perfil solicitado'
      }
    );
  } else {
    res.status(200).json(Administrador);
  }
});

module.exports = router;
