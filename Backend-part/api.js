
const route = require('express').Router()
const auth_controller = require('./Controller/Auth')
const message_controller = require('./Controller/Message')
const profile_controller = require('./Controller/Profile')
const authentication = require('./Controller/authentication')
// const cors = require('cors')
const mongoose = require('mongoose')
const rateLimit = require("express-rate-limit");

// limit request rate for messages to stop spamming
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 10 requests per windowMs
  });

// connect dbase
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('>> database connected')
});

// to get json body
route.use(require('express').urlencoded({ extended: true }));
route.use(require('express').json());




 // routes
route.post('/signin', auth_controller.sign_in); // to sign in
route.post('/signup', auth_controller.sign_up); // to sign up
route.get('/signout', authentication, auth_controller.sign_out); // to sign out, authentication required
route.get('/', authentication, profile_controller.get_user_data); // to get user data, authentication required
route.delete('/', authentication, profile_controller.delete_everyting); // to delete userdata, authentication required
route.get('/message/:page', authentication, profile_controller.get_message) // to get message, authentication required
route.post('/:username/message', limiter, message_controller); // to send message, limitation activated
route.get('/:username/exists', profile_controller.exists); // to check if any username exists
route.get('/toggle', authentication, profile_controller.toggle_activation); // to toggle is_active value, authentication required

module.exports = route
