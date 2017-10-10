const mongoose = require('mongoose');
const Author = require('../model/author');
const Guide = require('../model/guide');

exports.findOneById = async (ctx, next) => {
  const author = await Author
    .findOne({_id: ctx.params.id})
    .populate({path: 'guides', model: Guide})
    .exec();

  if (!author) 
    return ctx.status = 404;
  
  ctx.body = author;
  return next();
}

exports.saveAuthor = (ctx, next) => {
  const userData = {
    _id: new mongoose
      .Types
      .ObjectId(),
    email: ctx.request.body.email,
    password: ctx.request.body.password,
    passwordConf: ctx.request.body.passwordConf
  };

  const author = new Author(userData);

  author.save(err => {
    if (err) 
      return next(err);
  });

  ctx.body = author;

  return next();
}