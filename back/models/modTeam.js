const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    codeTeam: String,
    club: String,
    ageTeam: String,
    });

    module.exports = mongoose.model('team', TeamSchema);
