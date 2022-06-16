const { json } = require("express");
const express = require("express");

const usuarioService = require('../services/usuario.service')
const servicio = new usuarioService();
const router = express.Router();

router.get('/', (req, res) => {
  const Usuario = servicio.findAll();
  res.status(200).json(Usuario);
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
    const Usuario =await servicio.update(id,body);
    res.status(200).json(Usuario);
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
    mensaje: 'perfil de usuario parcialmente actualizado',
    datos: servicio.findBy(id)
  });
});

router.delete('/:id',(req,res)=> {
  const {id} = req.params;
  servicio.delete(id);
  res.json({
  mensaje :('perfil de usuario eliminado'),
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const Usuario = servicio.findBy(id);
  if (id == '10'){
    res.status(404).json(
      {
        mensaje: 'no se encuentra el perfil solicitado'
      }
    );
  } else {
    res.status(200).json(Usuario);
  }
});

module.exports = router;
