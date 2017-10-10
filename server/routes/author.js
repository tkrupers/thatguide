const router = require('koa-router')();
const author = require('../controller/author');

router.get('/author/:id', author.findOneById);

router.post('/author/new', author.saveAuthor);

module.exports = router;