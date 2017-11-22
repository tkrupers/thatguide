const author = require('../controller/author');

module.exports = (router, passport) => {
  router.get('/authors/:id', author.findOneById);

  return router;
}