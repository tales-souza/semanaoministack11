const express = require('express');

const crypto = require('crypto');
const OngController = require('./controllers/OngController'); 
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionConroller = require('./controllers/SessionController');



const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs/', OngController.index);
routes.get('/incidents/', IncidentsController.index);

routes.post('/ongs/', OngController.create);
routes.post('/incidents/', IncidentsController.create);

routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile/', ProfileController.index);

routes.post('/sessions/', SessionConroller.create);

module.exports = routes;