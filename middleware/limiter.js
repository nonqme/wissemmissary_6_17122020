const rateLimit = require("express-rate-limit");
const slowDown = require('express-slow-down')


exports.limiter = rateLimit({
    windowMs: 1 * 60 * 60 * 1000, // 1 heure
    max: 10 // limit each IP to 100 requests per windowMs
  });

exports.speedLimiter = slowDown({
  windowMs : 1 * 60 * 60 * 1000,
  delayAfter : 5,
  delayMs: 1000
});