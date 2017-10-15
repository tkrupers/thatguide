const loginStrategy = require('./strategies/local-login');
const LocalStrategy = require('passport-local').Strategy;
const Author = require('../model/author');
const mongoose = require('mongoose');

module.exports = (app, passport) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
 
  passport.deserializeUser((id, done) => {
    const userId = mongoose
      .Schema
      .Types
      .ObjectId(id);
    Author.findById(userId, function (err, author) {
      done(err, author);
    });
  });

  passport.use('local-login', loginStrategy);
  passport.use('local-signup', new LocalStrategy((username, password, done) => {
    // Try to find existing user with provided email
    Author.findOne({
      email: username
    }, (err, user) => {
      if (err) 
        return done(err);
      
      // If user found, return already im use message
      if (user) {
        return done(null, false, {
          status: 422,
          error: 'That email is already in use'
        });
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