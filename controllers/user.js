// Appel de bcrypt
const bcrypt = require('bcrypt');

// Appel de jsonwebtoken
const jwt = require('jsonwebtoken');

// Appel de Cryptojs
const CryptoJS = require("crypto-js");

// Appel de dotenv
require('dotenv').config();

// Importation du model user
const User = require('../models/user');

// Création de la route signup
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, parseInt(process.env.SALT))
    .then(hash => {
      const key = CryptoJS.enc.Hex.parse(process.env.ENCRYPTKEY);
      const iv = CryptoJS.enc.Hex.parse(process.env.ENCRYPTIV);
      const encryptmail = CryptoJS.AES.encrypt(req.body.email, key, {iv: iv}).toString()
      const user = new User({
        email: encryptmail,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

// Création de la route login
exports.login = (req, res, next) => {
  const key = CryptoJS.enc.Hex.parse(process.env.ENCRYPTKEY);
  const iv = CryptoJS.enc.Hex.parse(process.env.ENCRYPTIV);
  const encryptmail = CryptoJS.AES.encrypt(req.body.email, key, {iv: iv}).toString()
  User.findOne({ email: encryptmail })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              process.env.TOKEN,
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};