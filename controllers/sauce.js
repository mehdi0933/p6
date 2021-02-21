const { deleteOne } = require('../models/user');
const sauce = require('../routes/sauce');

//  on demande toutes les sauces  
exports.toutesSauce = (req, res, next) => {
    sauces.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(404).json({ error }));

};
// on demande une sauce 
exports.uneSauce = (req, res, next) => {
    sauces.findone({ _id: req.params.id })
        .then(sauces => res.status(200).json(sauces).js({ message: 'toutes les sauces' }))
        .catch(error => res.status(404).json({ error }));

};

// on recoit une sauce / image
exports.recoitSauce = (req, res, next) => {
    // on supp id cree par mangodb
    delete req.body._id;
    const sauces = new sauces({
        // racourci pour evite d'ecrire les champs du schema
        ...req.body
    });
    sauces.save()
        .then(() => res.status(201).js({ message: 'la sauce' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifSauce = (req, res, next) => {
    sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).js({ message: 'la modifiquation est effectue' }))
        .catch(error => res.status(400).json({ error }));
};

exports.suppSauce = (req, res, next) => {
    sauce.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).js({ message: 'la suppression est effectue' }))
        .catch(error => res.status(400).json({ error }));
};

exports.likeSauce = (req, res, next) => {
    if (jaime = 1) {
        sauce.post({ _id: req.params.id })
            .then(() => res.status(200).js)
            .catch(error => res.status(400).json({ error }))
    } else if (jaime = 0) {
        sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
            .then(() => res.status(200).json({message: modfife}))
            .catch(error => res.status(400).json({ error }))
    } else if (jaime = -1) {
        sauce.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).js)
            .catch(error => res.status(400).json({ error }))
    };

};