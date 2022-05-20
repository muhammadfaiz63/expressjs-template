const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    users : Object,
    name : String,
    gender : String,
    phone : String,
    photo : String,
    type : String,
    departement: String,
    address : String,
    nik : String,
    trainDrivers:Array,
    birthDate : Date,
    birthPlace : String     
},
{
    timestamps:true
}
); 
module.exports = mongoose.model('supervisor', usersSchema);