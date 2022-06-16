const { json } = require("express");
const express = require("express");

const CotizacionService = require('../services/cotizacion.service')
const servicio = new CotizacionService();
const router = express.Router();

router.get('/', (req, res) => {
  res.send('')
});

router.get('/listaC', (req, res) => {
  res.status(200).json(servicio.ListaC())
});

// router.get('/listaV', (req, res) => {
//   res.status(200).json(servicio.ListaV())
// });

router.post('/NuevoC', (req, res) => {
  const aux = req.body;
  servicio.NuevoCliente(aux)
  res.status(200).json({
    mensaje: "Datos agregados",
    Datos: aux
  })
});

router.post('/NuevoV', (req, res) => {
  const aux = req.body;
  servicio.NuevoVehiculo(aux)
  res.status(200).json({
    mensaje: "Datos agregados",
    Datos: aux
  })
});
module.exports = router;
