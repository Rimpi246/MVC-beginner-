const express = require("express");
// Creating an instance of router
const router = express.Router();

const controller = require('../controllers/UserController');

router.get('/', controller.get);
module.exports=router;