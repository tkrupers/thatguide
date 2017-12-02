const User = require('../model/user');
const Guide = require('../model/guide');

exports.findOneById = async (ctx, next) => {
  const author = await User
    .findOne({_id: ctx.params.id})
    .select('name email _id guides location age')
    .populate({path: 'guides', model: Guide})
    .exec();

  if (!author) 
    return ctx.status = 404;
  
  ctx.body = {author};
  return next();
}