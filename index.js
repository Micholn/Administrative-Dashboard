var app = require('express')();

var express = require('express');
var path = require('path');
var http = require('http').Server(app);
var validator = require('express-validator');

//import controller 
var AuthController = require('./controllers/AuthController');

//import Router file
var pageRouter = require('./routers/route');

var session = require('express-session');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var i18n = require("i18n-express");
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(session({
    key: 'user_sid',
    secret: 'somerandomstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1200000
    }
}));

app.use(session({ resave: false, saveUninitialized: true, secret: 'nodedemo'}));
app.use(flash());
app.use(i18n({
   translationsPath:  
}))