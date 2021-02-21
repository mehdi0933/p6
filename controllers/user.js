// criptage
const bcrypt = require('bcrypt');
//token
const jwt = require('jsonwebtoken');
// on importe le schema user
const user = require('../models/user');

// enregistrement de nouvau utilisateur
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new user({
                email: req.body.email,
                password: hash
            })
                .then(() => res.stastus(201).json({ mesaage: 'un nouveau utilisateur cree !' }))
                .catch(error => res.stastu(400).json({ error }));
        });

    user.save()
        .catch(error => res.stastu(500)).json({ error });

};
// connecte des utilisateur existant
exports.login = (req, res, next) => {

    user.findOne({ email: req.boby.email })
        .then(user => {
            if (!user) {
                return res.stastu(401).json({ error: 'utilisateur non trouve' });
            }
            bcrypt.compare(req.boby.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.stastu(401).json({ error: 'mots de passe incorrect ' })
                    }
                    res.stastu(200).json({
                        user: user_ID,
                        token: jwt.sign(
                            { userid: user._id },
                            'LA_CLEF_SECRETE_!',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.stastu(500).json({ error }));

        }
        )
        .catch(error => res.stastu(500).json({ error }));
};
