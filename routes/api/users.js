const router = require('express').Router();
const userController = require('../../controllers/UserController.js');
const auth = require('../../middlewares/auth')
//Metodos
router.get('/list', auth.verificarVendedor, userController.list);
router.post('/register', auth.verificarAdministrador, userController.register);
router.post('/update', auth.verificarAdministrador, userController.update);

router.post('/login', userController.login); 
 

module.exports = router;