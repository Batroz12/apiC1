const express = require("express");
const controlValidar = require('../middlewares/validar.middleware');
const {crearConcesionarioSchema,actualizarConcesionarioSchema,findByConcesionarioSchema} = require("../schemas/usuario.schema");
const concesionarioService = require('../services/concesionario.service');
const servicio = new concesionarioService();
const router = express.Router();

//Metodos
router.get('/', async (req, res, next) => {
  try {
  const concesionario = await servicio.findAll();
  res.status(200).json(concesionario);
  } catch (error) {
    next(error)
  }
});

router.post('/', controlValidar(crearConcesionarioSchema, 'body'), async(req, res, next) => {
  try {
    const body = req.body;
    const concesionario = await servicio.create(body);
    res.status(201).json({
      mensaje: 'registro exitoso',
      datos: concesionario
    });
  } catch (error) {
    next(error)
  }
});

router.put('/:id',controlValidar(actualizarConcesionarioSchema, 'body'),async (req, res, next) => {
  try {
    const { id }= req.params;
      const body = {
        id: id,
        ...req.body
      }
      const Concesionario =await servicio.update(id,body);
      res.status(200).json({
        mensaje: 'Actualizado',
        datos: Concesionario
      });
  } catch (error) {
    next(error)
  }
});

router.patch('/:id',controlValidar(actualizarConcesionarioSchema, 'body'), async (req,res, next) => {
  try {
    const { id }= req.params;
      const body = {
        id: id,
        ...req.body
      }
      const Concesionario =await servicio.update(id,body);
      res.status(200).json({
        mensaje: 'Parcialmente actualizado',
        datos: Concesionario
      });
  } catch (error) {
    next(error)
  }
});

// router.patch('/:id',async (req, res, next) => {
//   try {
//   const { id } = req.params
//   const body = req.body;
//   const Usuario = await servicio.update(id,body);
//   res.status(200).json(Usuario);
//   } catch (error) {
//     // res.status(404).json({
//     //   mensaje: error.message
//       // datos: servicio.findBy(id)
//     // });
//     next(error);
//   }
// });

router.delete('/:id',controlValidar(findByConcesionarioSchema, 'params'), async (req,res, next)=> {
  try {
    const {id} = req.params;
    const ConcesionarioEliminado = await servicio.delete(id);
    res.status(200).json({
    mensaje :('Eliminado'),
    });
  } catch (error) {
    next(error)
  }
});

router.get('/:id', controlValidar(findByConcesionarioSchema, 'params') , async(req, res, next) => {
  try {
    const { id } = req.params;
    const Concesionario = await servicio.findBy(id);
    res.json(Concesionario);
  } catch (error) {
    next(error);
  }
  // if (id == '10'){
  //   res.status(404).json(
  //     {
  //       mensaje: 'no se encuentra el perfil solicitado'
  //     }
  //   );
  // } else {
  //   res.status(200).json(Usuario);
  // }
});

module.exports = router;
