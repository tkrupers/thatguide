const mongoose = require('mongoose');
const Author = require('../model/author');
const Guide = require('../model/guide');

exports.fetchAll = async (ctx, next) => {
  const all = await Guide.find({})
  .select('title description date');
  ctx.body = all;
  return next();
}

exports.findOneById = async (ctx, next) => {
  const guide = await Guide
    .findOne({_id: ctx.params.id})
    .populate('favs')
    .populate({path: 'author', model: Author})
    .exec();

  if (!guide) 
    return ctx.status = 404;

  ctx.body = guide;
  return next();
};

exports.saveGuide = async (ctx, next) => {
  ctx.body = 'New step posted';
  return next();
};

