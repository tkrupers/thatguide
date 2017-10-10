require('dotenv').config();

const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const mongoose = require('mongoose');
const koaBody = require('koa-body');
const chalk = require('chalk');
const guide = require('./routes/guide');
const author = require('./routes/author');
const log = console.log;

mongoose.connect(process.env.DB_HOST || 'localhost', { useMongoClient: true });
mongoose.Promise = require('bluebird');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  log(chalk.green('Connected to MongoDB'));

  const app = new Koa();
  const router = new Router();
  
  const port = process.env.API_PORT || 3001;
  const host = process.env.API_HOST || 'localhost';
  
  app.use(logger());
  
  app
    .use(koaBody())
    .use(guide.routes())
    .use(author.routes())
    .use(router.allowedMethods());
    
  app.listen(port, host, () => {
    log(chalk.green(`Listening on port ${port}`));
  });
});