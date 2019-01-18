const express = require('express');
const users = express.Router();
const passport = require('passport');
require('../../controllers/passport')(passport);
require('../../models/User');
const userController = require('../../controllers/userController');
const auth = require('../../controllers/middleware/auth');

users.post('/login', passport.authenticate('local-login', {
    successRedirect : '/api/users/success', 
    failureRedirect : '/api/users/failure',
    failureFlash : true
}));

users.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/api/users/success', 
    failureRedirect : '/api/users/failure', 
    failureFlash : true 
}));

users.get('/isLoggedIn', auth.isLoggedIn, (req, res, next)=> {
    console.log('logged in successfully');
    res.send({
        user: req.user,
        loggedIn: true
    });
});

users.get('/isAdmin', auth.isAdmin, (req, res, next)=> {
    console.log('logged in successfully');
    res.send({
        user: req.user,
        loggedIn: true,
        admin: true
    });
});

users.get('/logout', auth.logoutUser, (req, res, next)=> {
    console.log('user logged out');
    res.redirect('/');
});

users.get("/success", (req, res, next)=> {
    return res.send({
        user: req.user,
        loggedIn: true
    });
});

users.get("/failure", (req, res, next)=> {
    return res.send({
        user: null,
        loggedIn: false
    });
});

module.exports = users;