const rateLimit = require("express-rate-limit");


exports.limiter = rateLimit({
    windowMs: 1 * 60 * 60 * 1000, // 1 heure
    max: 5 // limit each IP to 100 requests per windowMs
  });