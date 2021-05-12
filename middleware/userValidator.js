const {check, validationResult} = require('express-validator');

exports.userValidationResult = (req, res, next) => {
    const result = validationResult(req);
    if(!result.isEmpty()){
        const error = result.array()[0].msg;
        return res.status(422).json({sucess: false, error: error})
    }
    next();
}

exports.userValidator = [
    check('password')
    .notEmpty().isLength({ min: 8, max: 20}).withMessage('8 caractères minimum, 20 maximum')
    .custom(value => !/\s/.test(value)).withMessage('Les espaces ne sont pas autorisées')
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).withMessage('1 majuscule, 1 minuscule, 1 caractère spécial et 1 chiffre minimum')
];