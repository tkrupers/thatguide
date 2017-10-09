const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';

app.use(logger());

const guides = {
  1: {
    id: 1,
    title: 'Guide 1',
    shortDescription: 'Short guide from api',
    authorId: 1,
    steps: [
      {id: 1, stepNumber: 1, title: 'Step 1', description: 'Step 1 coming from api'},
      {id: 2, stepNumber: 2, title: 'Step 2', description: 'Step 2 coming from api'}      
    ]
  }
};

const author = {
  1: {
    name: 'Thomas Krupers',
    age: 31,
    location: 'Amsterdam'
  }
};

router
  .param('guide', function (id, ctx, next) {
    // TODO: Should come from DB model!
    ctx.guide = guides[id];
    if (!ctx.guide) 
      return ctx.status = 404;
    return next();
  })
  .get('guide', '/guide/:guide', function (ctx, next) {
    ctx.body = ctx.guide;
  })
  .post('/guide/:guide/new-step', function (ctx, next) {
    ctx.body = 'New step posted';
  })
  .param('author', function (id, ctx, next) {
    ctx.author = author[id];
    if (!ctx.author) 
      return ctx.status = 404;
    return next();
  })
  .get('author', '/author/:author', function (ctx, next) {
    ctx.body = ctx.author;
  });

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, host, () => {
  console.log(`Listening on port ${port}`)
});