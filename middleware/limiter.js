// Appel d'express rate limit
const rateLimit = require("express-rate-limit");

// Appel d'express slow down
const slowDown = require('express-slow-down')

// Création du middleware limiter
exports.limiter = rateLimit({
    windowMs: 1 * 60 * 60 * 1000, // 1 heure
    max: 10 // 10 requète par ip par windowMs
  });

// Création du middleware speedLimiter
exports.speedLimiter = slowDown({
  windowMs : 1 * 60 * 60 * 1000, // 1 heure
  delayAfter : 5, // Commence à ralentir les requètes après 5 essai
  delayMs: 1000 
});