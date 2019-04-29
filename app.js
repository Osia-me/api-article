const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      passport    = require('passport'),
      mongoose    = require('mongoose'),
      user        = require('./routes/user'),

      port        = process.env.PORT || 3000;

// Parse Application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//DB Configuration
const db = require('./config/keys').mongo;
//Connect to mongodb
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log(`Mongo DB Connected!`))
.catch(err => console.log(err))

//Use routes
app.use('/user', user);

//Server
app.listen(port, () => console.log(`Server running on port: ${port}`));
