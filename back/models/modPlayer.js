const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    codePlayer: String,
    nomPlayer: String,
    club: String,
    rang:String,
    });

    module.exports = mongoose.model('player', PlayerSchema);
