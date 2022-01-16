const mongoose = require('mongoose');

const Hero = new mongoose.Schema({
    superHero: {
        type: String,
        required: [true, 'Please name the hero'],
        unique: true,
        trim: true
    },
    realName: {
        type: String,
        required: [true, 'Please name the real name'],
        maxlength: [100, 'Please keep real name short']
    }
})

module.exports = mongoose.models.Hero || mongoose.model('Hero', Hero)