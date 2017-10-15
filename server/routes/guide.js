const guide = require('../controller/guide');

module.exports = (router, passport) => {

  router.get('/guides', guide.fetchAll);

  router.get('/guides/:id', guide.findOneById);

  router.post('/guides/new', guide.saveGuide);

  router.post('/guides/:id/new-step', guide.saveStep);

  return router;
}
