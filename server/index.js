const Koa = require('koa');
const logger = require('koa-logger');

const app = new Koa();

const port = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(logger());

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port, host , () => {
  console.log(`Listening on port ${port}`)
});