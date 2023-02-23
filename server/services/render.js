const axios = require('axios');


// creating functions for different routes and exporting it 

//home route
exports.homeRoutes=(req,res)=>{
    // make a get request to users api
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index',{users: response.data});
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

//add user route
exports.add_user=(req,res)=>{
    res.render('addUser');
}


//update user route
exports.update_user=(req,res)=>{
    axios.get('http://localhost:3000/api/users/',{params:{id : req.query.id}})
        .then(function(response){
            res.render('update_user',{user : response.data});
        })
        .catch(err => {
            res.send(err);
        })
    // res.render('update_user');
}