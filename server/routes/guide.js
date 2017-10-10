const router = require('koa-router')();
const guide = require('../controller/guide');

router.get('/guides', guide.fetchAll);

router.get('/guides/:id', guide.findOneById);

router.post('/guides/:id/new-step', guide.saveGuide);

module.exports = router;