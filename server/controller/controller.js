var userDB = require('../model/model');

//create and save new user
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.staus(400).send({message:"Content Cannot Be Empyt!"});
        return;
    }

    //new user
    const user = new userDB({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    });

    //save user to database
    user
        .save(user)
        .then(data=>{
            // res.send(data)
            res.redirect('/adduser')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Something went wrong while creating adding a new user"
            });
        });
}


// retrive and return all user || retrive and return single user
exports.find=(req,res)=>{

    // checking if else condition if the query string consist of id than it will return the specific recrod else it will return all the records from the database
    if(req.query.id){
        const id = req.query.id;
        userDB.findById(id)
            .then(user => {
               if(!user){
                    res.status(400).send({message:"Sorry unable to find the record"});
               }else{
                    res.send(user);
               }
            })
            .catch(err => {
                res.status(404).send({message:"Something went wrong while requesting"})
            })
    }else{
        userDB.find()
        .then(user => {
            res.send(user)
        }).catch(err => {
            res.status(500).send({message:err.message || "Error occured while retrieving data from database"})
        })
    }
}

//update user identified by user ID
exports.update=(req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update cannot be empty"})
    }

    const id = req.params.id;
    userDB.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.send(400).send({message:`Cannot update data of user with id ${id}`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error updating user information"})
        })
}

//delete user with specified user id 
exports.delete=(req,res)=>{
    const id = req.params.id;
    userDB.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Record Not Found"});
            }else{
                res.send({message:"User Record Deleted Successfully"});
            }
        })
        .catch(err => {
            res.status(500).send({message:err || `Something went wrong unable to delete a record!!`});
        });
}