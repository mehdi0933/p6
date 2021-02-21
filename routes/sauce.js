const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/sauce');

//  on demande toutes les sauces 
router.get('/', sauceCtrl.toutesSauce);

// on demande une sauce 
router.get('/:id', sauceCtrl.uneSauce);

// on recoit une sauce / image
router.post('/', sauceCtrl.recoitSauce);

// on veut modifier une sauce post
router.put('/:id', sauceCtrl.modifSauce);

// on veut supprime unz sauce post 
router.delete('/:id', sauceCtrl.suppSauce);


// on veut un like
router.post ('/:id/like',sauceCtrl.likeSauce)
module.exports = router;