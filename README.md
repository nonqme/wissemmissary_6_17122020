# Projet 6 - Construire une API sécurisée pour l'application d'avis gastronomiques So Pekocko

## Instruction :

*Effectuer un `npm install` pour installer les modules  
*Lancer le serveur avec `node server`

## Information supplémentaire :

*À l'inscription, le mot de pass doit contenir au moins __8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et un caractère spécial__.   
*Le formulaire d'ajout de sauce est soumis à un validateur qui autorise que __les lettres, chiffres et caractères spéciaux utilisés dans un texte__.  
*Utilisation d'__Helmet__ pour sécuriser les headers de l'application express.  
*Utilisation de __cryptoJS__ pour __encrypter__ les données sensible de la base de données.  
*Utilisation de __Bcrypt__ pour __Hash__ le mot de pass.  
*Utilisation de __jsonwebtoken__ pour l'__authentification__.  
*Utilisation de __rate limiter__ pour limiter le login à __10__ requètes par __IP__ par __heure__  
*Utilisation de __speed limiter__ pour ralentir les tentatives de connections après __5__ essais  
*Utilisation de __dotenv__ pour cacher les données sensibles dans le code  
