const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const validation = require('../middleware/validator')
const userLimit = require('../middleware/limiter')

router.post('/signup', validation.userValidator, validation.formValidationResult, userCtrl.signup);
router.post('/login', userLimit.speedLimiter, userLimit.limiter, userCtrl.login);

module.exports = router;