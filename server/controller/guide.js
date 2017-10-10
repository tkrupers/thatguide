const mongoose = require('mongoose');
const Step = require('../model/step');
const Guide = require('../model/guide');

exports.fetchAll = async(ctx, next) => {
  const all = await Guide
    .find({})
    .select('title description date');
  ctx.body = all;
  return next();
}

exports.findOneById = async(ctx, next) => {
  const guide = await Guide
    .findOne({_id: ctx.params.id})
    .populate('favs')
    .populate('steps', 'title description')
    .populate('author', 'email name location')
    .exec();

  if (!guide) 
    return ctx.status = 404;
  
  ctx.body = guide;
  return next();
};

exports.saveGuide = async(ctx, next) => {
  const {title, description, author} = JSON.parse(ctx.request.body);
  const guideData = {
    _id: new mongoose
      .Types
      .ObjectId(),
    title,
    description,
    author
  };

  const guide = new Guide(guideData);

  guide.save(err => {
    if (err) 
      return next(err);
    }
  );

  ctx.body = guide;

  return next();
}

exports.saveStep = async(ctx, next) => {
  const {title, description} = JSON.parse(ctx.request.body);

  const stepData = {
    _id: new mongoose
      .Types
      .ObjectId(),
    title,
    description,
    guide: ctx.params.id
  };

  const step = new Step(stepData);

  step.save((err, step) => {
    if (err) 
      return next();
    
    // After saving step we need to update the 
    // guide as well with step id
    Guide.findOne({
      _id: step.guide
    }, (err, guide) => {
      guide
        .steps
        .push(step._id);
      guide.save(err => next(err));
    });
  });

  ctx.body = 'New step saved';

  return next();
};