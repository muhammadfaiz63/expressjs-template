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
    address : String,
    nik : String,
    division: Object,
    departement: Object,
    birthDate : Date,
    birthPlace : String,
    qrcode:String,     
},
{
    timestamps:true
}
); 
module.exports = mongoose.model('management', usersSchema);