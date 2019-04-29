const express   = require('express'),
      router    = express.Router(),
      User      = require('../models/User'),
      bcrypt    = require('bcryptjs'),
      jwt       = require('jsonwebtoken'),
      keys      = require('../config/keys'),
      passport  = require('passport');


//Registration of user with User model
//Post http://localhost:3000/user/registration
//Public access

router.post('/registration', (req, res) => {
  //Check if NEW user
  User.findOne({email: req.body.email})
  .then(user => {
    //For existing user with used email
    if(user){
      return res.status(400).json({userExist: 'User email is already exist. Please login or use other email'});
    } else {
      //create NEW user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
      //Hash password using bcrypt
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash)=> {
          if(err) {console.log(err)}
          newUser.password = hash;
          newUser.save()
          .then(user => res.json(user))
          .catch(err => console.log(err))
          })
      });
      }
    })
});

module.exports = router;
