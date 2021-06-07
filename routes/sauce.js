// Appel d'express
const express = require('express');

// Création d'un router avec express
const router = express.Router();

// Importation du controlller et des middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sauceCtrl = require('../controllers/sauce');

// Création de la route post createSauce avec les middleware auth et multer
router.post('/', auth, multer, sauceCtrl.createSauce);

// Création de la route get getAllSauce avec le middleware auth
router.get('/', auth, sauceCtrl.getAllSauce);

// Création de la route get getOneSauce avec le middleware auth
router.get('/:id', auth, sauceCtrl.getOneSauce);

// Création de la route put modifySauce avec les middleware auth et multer
router.put('/:id', auth, multer, sauceCtrl.modifySauce);

// Création de la route delete deleteSauce avec le middleware auth
router.delete('/:id', auth, sauceCtrl.deleteSauce);

// Création de la route post feedbackSauce avec le middleware auth
router.post('/:id/like', auth, sauceCtrl.feedbackSauce)

 
module.exports = router;