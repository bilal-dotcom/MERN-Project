const mongoose = require('mongoose');

const LigueSchema = new mongoose.Schema({
    codeLigue: String,
    nomLigue: String,
    rang:String,
    });

    module.exports = mongoose.model('ligue', LigueSchema);
