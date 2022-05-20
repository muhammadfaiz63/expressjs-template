const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    username : String,
    password : String,
    phone : String,
    email : String,
    role : String,
    access : Array,
    status : String,
    token : String,
    loginLatest:Date     
},
{
    timestamps:true
}
); 
module.exports = mongoose.model('users', usersSchema);