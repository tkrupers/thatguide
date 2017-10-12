const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const Author = require('../../model/author');

module.exports = () => passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (username, password, done) => {
  Author.findOne({
    username
  }, (err, user) => {
    // If error return it
    if (err) 
      return done(err);
    
    // No user was found, return message
    if (!user) {
      return done(null, false, {message: 'Incorrect username'});
    }

    // Incorrect given password for given username
    if (!user.comparePassword(password)) {
      return done(null, false, {message: 'Incorrect password'});
    }

    // All good to go, return user
    return done(null, user);
  });
}));