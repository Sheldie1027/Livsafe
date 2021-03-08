const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Symptom = new Schema({
    symptom: {type: String}
    
});
module.exports = mongoose.model('Symptom', Symptom);