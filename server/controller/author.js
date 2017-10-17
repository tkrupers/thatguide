const Author = require('../model/author');
const Guide = require('../model/guide');

exports.findOneById = async (ctx, next) => {
  const author = await Author
    .findOne({_id: ctx.params.id})
    .select('name email _id guides location age')
    .populate({path: 'guides', model: Guide})
    .exec();

  if (!author) 
    return ctx.status = 404;
  
  ctx.body = {author};
  return next();
}