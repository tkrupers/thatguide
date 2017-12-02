const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');
const mongoose = require('mongoose');

module.exports = (app, passport) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    User
      .findById(id, function (err, author) {
        done(err, author);
      });
  });

  passport.use('local-login', new LocalStrategy(async(username, password, done) => {
    const author = await User.findOne({email: username});

    // No user was found, return message
    if (!author) {
      return done(null, false, {message: `No user found with email: ${username}`});
    }

    // Incorrect given password for given username
    const passwordMatch = await author.comparePassword(password, author.password, (err, isMatch) => isMatch);

    if (!passwordMatch) {
      return done(null, false, {message: `Incorrect password for user ${username}`});
    }

    done(null, author);
  }));

  passport.use('local-signup', new LocalStrategy(async(username, password, done) => {
    // Try to find existing user with provided email
    const author = await User.findOne({
      email: username
    }, (err, user) => {
      if (err) 
        done(err);
      }
    );

    // If user found, return already im use message
    if (author) {
      return done(null, false, {message: `Email ${username} is already in use`});
    }

    // Otherwise, create new author
    const newUser = await new User({
      _id: new mongoose
        .Types
        .ObjectId(),
      email: username,
      password
    }).save();

    done(null, newUser);
  }));
};