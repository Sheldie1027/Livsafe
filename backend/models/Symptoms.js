const { Int32 } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Symptom = new Schema({
    ID: {type: Int32},
    symptom: {type: String}
    
});
module.exports = mongoose.model('Symptom', Diagnoses);