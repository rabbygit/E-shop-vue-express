const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const RegisterUser = require('../models/register_user');
const secret = require('../config/keys').secret;

var opts = {};
//Extract the token from the request
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//Set the secret key
opts.secretOrKey = secret;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      RegisterUser.findById(jwt_payload._id)
        .then(user => {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }),
  );
};
