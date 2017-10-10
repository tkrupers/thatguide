const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  steps: [{ type: Schema.Types.ObjectId, ref: 'Step'}],
  author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
  date: { type: Date, default: Date.now },
  published: Boolean,
  meta: {
    votes: Number,
    favs: [{ type: Schema.Types.ObjectId, ref: 'Author'}]
  }
});

const Guide = mongoose.model('Guide', schema);

module.exports = Guide;