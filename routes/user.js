// Appel d'express
const express = require('express');

// Création d'un router avec express
const router = express.Router();

// Importation du controlller et des middleware
const userCtrl = require('../controllers/user');
const validation = require('../middleware/validator')
const userLimit = require('../middleware/limiter')

// Création de la route Signup avec les middleware validator et limiter
router.post('/signup', userLimit.speedLimiter, userLimit.limiter, validation.passwordValidator, validation.formValidationResult, userCtrl.signup);

// Création de la route Login avec le middleware limiter
router.post('/login', userLimit.speedLimiter, userLimit.limiter, userCtrl.login);

module.exports = router;