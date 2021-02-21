const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: String, required: true },
    usersLiled: { type: String, required: true },
    usersDislikes: { type: String, required: true },
});



module.exports = mongoose.model('sauce', sauceSchema);