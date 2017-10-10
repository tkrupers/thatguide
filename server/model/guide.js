const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: String,
  description: String,
  steps: [{ 
    title: String,
    body: String
  }],
  author: {type: Schema.Types.ObjectId, ref: 'Author'},
  date: { type: Date, default: Date.now },
  published: Boolean,
  meta: {
    votes: Number,
    favs: [{ type: Schema.Types.ObjectId, ref: 'Author'}]
  }
});

const Guide = mongoose.model('Guide', schema);

module.exports = Guide;