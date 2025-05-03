const express = require('express');
const route = express.Router();
const { registerUser,loginUser,me } = require('../controller/userController');
const {protect}=require('../middleware/userMiddleware')
route.post('/register', registerUser);
route.post('/login',loginUser)
route.get('/me',protect,me)
module.exports = route;
