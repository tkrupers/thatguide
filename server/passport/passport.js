const loginStrategy = require('./strategies/local-login');
const LocalStrategy = require('passport-local').Strategy;
const Author = require('../model/author');
const mongoose = require('mongoose');

module.exports = (app, passport) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((user, done) => {
    Author.findOne({_id: user._id}, (err, author) => {
      done(null, author);
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
        console.log(err, author);
        if (err) 
          throw(err);
        return done(null, author);
      })
    });
  }));
};