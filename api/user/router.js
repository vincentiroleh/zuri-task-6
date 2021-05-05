const router = require('express').Router();
const Controller = require('./controller');
const { schemas, ReqValidator } = require('./validator')

router.post('/register', ReqValidator(schemas.user), Controller.register);
router.get('/user', Controller.getUser);
router.put('/user/:id', ReqValidator(schemas.user), Controller.updateUser);
router.delete('/user/:id', Controller.deleteUser);

router.get('*', (req, res) => {
    res.json({
        message: 'Resource in search not available, check our doc',
        doc: 'https://github.com/vincentiroleh/zuri-task-6'
    })
});
module.exports = router;