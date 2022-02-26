const mongoose = require('mongoose');


const logSchema = new mongoose.Schema({
    title: String,
    entry: String,
    shipIsBroken: Boolean
});

const Logs = mongoose.model('Logs', logSchema);

module.exports = Logs;
