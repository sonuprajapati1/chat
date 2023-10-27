const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require('passport');
const user = require("../services/user.service");

console.log("login call");


passport.serializeUser((user, done) => {
    console.log("serializeUser", user);
    done(null, user);
})
passport.deserializeUser(function (user, done) {
    console.log("deserializeUser", user);
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: '344175323902-8ighsuqkkg2hbu6459f9c02ov1v3f0pm.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback:true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

