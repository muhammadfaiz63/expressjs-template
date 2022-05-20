const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    name : String,
    gender : String,
    phone : String,
    photo : String,
    type : String,
    address : String,
    nik : String,
    license : String,
    birthDate : Date,
    birthPlace : String,    
    qrcode:String,     
    user: Object
},
{
    timestamps:true
}
); 
module.exports = mongoose.model('medicalOfficer', usersSchema);