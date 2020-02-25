var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pasport = require('passport');


var RegisterUser = require('../models/register_user');
const secret = require('../config/keys').secret; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// register user
router.post('/register' , function(req , res){

  //Extract information
  let { name , email , username , phonenumber , password , confirm_password } = req.body;
  
  //check existence of email
  RegisterUser.findOne({ email : email }).then(user => {
    if(user){
      return res.status(400).json({
        success : false ,
        message : 'Email is already used !'
      })
    }
  });

  var newUser = new RegisterUser({
    name  ,
    email ,
    username ,
    phonenumber ,
    password
  });

  //hash the password
  bcrypt.genSalt(10 , function(err , salt){
    bcrypt.hash(newUser.password , salt , function(err , hash){
      if(err) throw err;

      newUser.password = hash ;

      newUser.save().then(user => {
        return res.status(201).json({
          success : true ,
          message : "New user registered !!"
        })
      });
    })
  })

});

// user login & giving a token
router.post("/login" , function(req,res){
let { email , password } = req.body;

//First check email then password
RegisterUser.findOne({ email : email }).then(user =>{

  if(!user){
    return res.status(404).json({
      success: false ,
      message : "Email is incorrect!"
    })
  }

  //Else Compare the Password
  bcrypt.compare(password , user.password , function(err ,isMatch){
    if(!isMatch){
      return res.status(404).json({
        success: false ,
        message : "Invalid password"
      })
    }else{
      //create payload
      const payload = {
        _id : user._id ,
        name : user.name ,
        email : user.email
      }
      jwt.sign( payload , secret , { expiresIn: 604800 } , function(err , token){
        return res.status(200).json({
          success: true,
          user: user,
          token: `Bearer ${token}`,
          msg: "successfully logged in !!"
        });
      });
    }
  });
});
});
module.exports = router;
