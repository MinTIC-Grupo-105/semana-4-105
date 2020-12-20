//Ruta interna para articulo
const router = require('express').Router();
const articuloController = require('../../controllers/ArticuloController');
const auth = require('../../middlewares/auth');
//Metodos
router.get('/list', auth.verificarVendedor, articuloController.list);
router.post('/add', auth.verificarVendedor, articuloController.add);
router.put('/update', auth.verificarVendedor, articuloController.update);
router.put('/activate', auth.verificarVendedor, articuloController.activate);
router.put('/deactivate', auth.verificarVendedor, articuloController.deactivate);

//router.post('/login', userController.login); 

module.exports = router;