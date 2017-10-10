const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  location: String,
  age: Number,
  email: {
   type: String,
   unique: true,
   required: true,
   trim: true
  },
  password: {
    type: String,
    required: true
  },
  passwordConf: {
    type: String,
    required: true
  },
  guides: [{ type: Schema.Types.ObjectId, ref: 'Guide' }]
});

const Author = mongoose.model('Author', schema);

module.exports = Author;