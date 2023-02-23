// getting express framework of node js
const express = require('express');
// creating route variable for routing of http request
const route = express.Router();
// getting router.js file
const services = require('../services/render');
//getting controller.js file
const controller = require('../controller/controller');


// setting home/root route
route.get('/',services.homeRoutes);

//setting add user route
route.get('/adduser',services.add_user)

//setting update user route
route.get('/update-user',services.update_user);



// this is how we export all the routes to use in another file
module.exports = route



// API CRUD
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);