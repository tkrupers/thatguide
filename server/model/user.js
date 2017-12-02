const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

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
  guides: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Guide'
    }
  ]
});

// Middleware to hash password before saving to DB
schema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) 
    return next();
  
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) 
      return next(err);
    
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) 
        return next(err);
      
      user.password = hash;

      next();
    })
  })
});

schema.methods.comparePassword = (candidatePassword, password, cb) => {
  bcrypt.compare(candidatePassword, password, (err, isMatch) => {
    if (err) 
      return cb(err);
    cb(null, isMatch);
  });
}

const User = mongoose.model('User', schema);

module.exports = User;