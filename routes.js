const express = require('express');
const routes = express.Router();

const ContactController = require('./app/controller/ContactController');
// const LoginController = require('./app/controller/LoginController');
// const authenticate = require('./middleware/authorization')

// routes.get('/varejao/contact',authenticate.verifyJWT,ContactController.indexVarejao);
// routes.post('/varejao/contact',authenticate.verifyJWT,ContactController.insertVarejao);

routes.get('/macapa/contact', ContactController.indexMacapa);
routes.post('/macapa/contact', ContactController.saveMacapa);

// routes.post('/login',LoginController.login);

// rs



module.exports = routes;