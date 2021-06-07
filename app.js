// Appel d'express
const express = require('express');

// Appel de mongoose
const mongoose = require('mongoose');

// Appel du module path
const path = require('path');

// Appel d'helmet
const helmet = require('helmet');

// Appel de dotenv
require('dotenv').config();

// Import de la route sauce
const sauceRoutes = require('./routes/sauce');

//Import de la route user
const userRoutes = require('./routes/user');

// Connection à la base de données mongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Création de l'application
const app = express();

// Initialisation d'helmet
app.use(helmet());

// Initialisation des headers qui nous permette d'accéder à notre API depuis n'importe quelle origine, d'ajouter les headers mentionnés aux requêtes envoyées vers notre API et d'envoyer des requêtes avec les méthodes mentionnées 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// Initialisation d'express.json pour parser les requêtes envoyées par le client
app.use(express.json({ limit: '10kb'}));

// Initialisation de la route user
app.use('/api/auth', userRoutes);

// Initialisation de la route sauces
app.use('/api/sauces', sauceRoutes);

// Initialisation de la route des images
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;