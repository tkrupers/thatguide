const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  guide: { type: Schema.Types.ObjectId, ref: 'Guide', required: true }
});

const Step = mongoose.model('Step', schema);

module.exports = Step;