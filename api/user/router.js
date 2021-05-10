const router = require('express').Router();
const Controller = require('./controller');
const { schemas, ReqValidator } = require('./validator')

router.post('/register', ReqValidator(schemas.user), Controller.register);
router.get('/user', Controller.getUser);
router.put('/user/:id', ReqValidator(schemas.user), Controller.updateUser);
router.delete('/user/:id', Controller.deleteUser);

module.exports = router;