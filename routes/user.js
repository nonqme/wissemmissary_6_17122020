const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const userValidation = require('../middleware/userValidator')
const userLimit = require('../middleware/limiter')

router.post('/signup', userValidation.userValidator, userValidation.userValidationResult, userCtrl.signup);
router.post('/login',userLimit.limiter, userCtrl.login);

module.exports = router;