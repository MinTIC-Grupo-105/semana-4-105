//Ruta interna para categoria
const router = require('express').Router();
const categoriaController = require('../../controllers/CategoriaController');
const auth = require('../../middlewares/auth');
//Metodos
router.get('/list', auth.verificarVendedor, categoriaController.list);
router.post('/add', auth.verificarVendedor, categoriaController.add);
router.put('/update', auth.verificarVendedor, categoriaController.update);
router.put('/activate', auth.verificarVendedor, categoriaController.activate);
router.put('/deactivate', auth.verificarVendedor, categoriaController.deactivate);

//router.post('/login', userController.login); 
 
module.exports = router;