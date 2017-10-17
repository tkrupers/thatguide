require('dotenv').config();

const Koa = require('koa');
const logger = require('koa-logger');
const mongoose = require('mongoose');
const chalk = require('chalk');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const passport = require('koa-passport');
const log = console.log;

mongoose.connect(process.env.DB_HOST || 'localhost', {useMongoClient: true});
mongoose.Promise = require('bluebird');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  log(chalk.green('Connected to MongoDB'));

  // Initialize Koa
  const app = new Koa();
  const port = process.env.API_PORT || 3001;
  const host = process.env.API_HOST || 'localhost';

  app.proxy = true;

  // Logger
  app.use(logger());
  
  // Sessions
  app.keys = [process.env.SECRET];
  app.use(session(app));

  // Body parser
  app.use(bodyParser());

  // Initialize passport
  require('./passport/passport')(app, passport);

  // Routes
  require('./routes/')(app, passport);

  app.listen(port, host, () => {
    log(chalk.green(`Listening on port ${port}`));
  });
});