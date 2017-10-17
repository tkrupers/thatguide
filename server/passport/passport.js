const LocalStrategy = require('passport-local').Strategy;
const Author = require('../model/author');
const mongoose = require('mongoose');

module.exports = (app, passport) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async(_id, done) => {
    try {
      const userId = mongoose
        .Schema
        .Types
        .ObjectId(_id);

      const author = await Author.findById(userId);

      done(null, author);
    } catch (err) {
      done(err);
    }
  });

  passport.use('local-login', new LocalStrategy({
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

  passport.use('local-signup', new LocalStrategy((username, password, done) => {
    // Try to find existing user with provided email
    Author.findOne({
      email: username
    }, (err, user) => {
      if (err) 
        return done(err);
      
      // If user found, return already im use message
      if (user) {
        return done(null, false, {message: 'That email is already in use'});
      }

      // Otherwise, create new author
      const author = new Author({
        _id: new mongoose
          .Types
          .ObjectId(),
        email: username,
        password
      });

      author.save((err, author) => {
        if (err) 
          throw(err);
        return done(null, author);
      });
    });
  }));
};