// Appel de mongoose
const mongoose = require('mongoose');

// Appel de mongoose unique validator
const uniqueValidator = require('mongoose-unique-validator');

// Création du model user avec mongoose 
const userSchema = mongoose.Schema({
  userId: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

//Appel du plugin uniqueValidator pour le model user
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);