const router = require('express').Router();
const userController = require('../../controllers/UserController.js');
const auth = require('../../middlewares/auth')
//Metodos
router.get('/list', auth.verificarVendedor, userController.list);
router.post('/add', auth.verificarAdministrador, userController.add);
//router.post('/register', auth.verificarAdministrador, userController.register);
router.put('/update', auth.verificarAdministrador, userController.update);
router.put('/activate', auth.verificarAdministrador, userController.activate);
router.put('/deactivate', auth.verificarAdministrador, userController.deactivate);

router.post('/login', userController.login); 
 

module.exports = router;

