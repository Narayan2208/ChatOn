const express = require('express');
const {registerUser,authUser} = require("../controllers/userControllers")
const router = express.Router();

// router.route('/').post(registerUser)  Another way to do this
router.post('/', registerUser)
router.post('/login', authUser)

module.exports = router;