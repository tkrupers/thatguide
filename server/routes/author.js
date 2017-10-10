const router = require('koa-router')();
const author = require('../controller/author');

router.get('/authors/:id', author.findOneById);

router.post('/author/new', author.saveAuthor);

module.exports = router;