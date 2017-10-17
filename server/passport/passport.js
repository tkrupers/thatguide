const LocalStrategy = require('passport-local').Strategy;
const Author = require('../model/author');
const mongoose = require('mongoose');

module.exports = (app, passport) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    Author
      .findById(id, function (err, author) {
        done(err, author);
      });
  });

  passport.use('local-login', new LocalStrategy((username, password, done) => {
    Author.findOne({
      email: username
    }, (err, user) => {
      // If error return it
      if (err) 
        done(err);
      
      // No user was found, return message
      if (!user) {
        done(null, false, {message: 'Incorrect username'});
      }

      // Incorrect given password for given username
      user.comparePassword(password, user.password, (err, isMatch) => {
        if (err) 
          done(err);
        if (!isMatch) {
          done(null, false, {message: 'Incorrect password'});
        }
      });

      // All good to go, return user
      done(null, user);
    });
  }));

  passport.use('local-signup', new LocalStrategy((username, password, done) => {
    // Try to find existing user with provided email
    Author.findOne({
      email: username
    }, (err, user) => {
      if (err) 
        done(err);
      
      // If user found, return already im use message
      if (user) {
        done(null, false, {message: 'That email is already in use'});
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
          done(err);
        done(null, author);
      });
    });
  }));
};