const medicalOfficerModel = require('../models/medicalOfficerModel')
const usersModel = require('../models/usersModel')
const axios = require('axios')

const authServices = process.env.AUTH_URI || `http://localhost:200`;

const reqQuery = (values) => {
    const { id,username,password } = values
    let query = {}
    if(id){
        query = {...query,_id:id}
    }
    if(username && password){
        query = {...query,username , password}
    }
    return query
}

exports.get = async function (req, res, next) {
    const query = await reqQuery(req.query)
    console.log("query",query)
    medicalOfficerModel.find(query, (err, result) => {
        console.log("result",result)
        if (err) {
            console.log("error user",err)
            next()
        }
        else {
            res.status(200).json(result)
        }
    })
}

exports.create = function (req, res, next) {
    console.log("req body user",req.body.user)
    var new_data = new medicalOfficerModel(req.body);
    new_data.save(function(err, data) {
        if (err){
            next(err);
        }
        else{
            var new_data = new usersModel({
                    username : req.body.username,
                    password : req.body.password,
                    phone : req.body.phone,
                    email : req.body.email,
                    role : req.body.role,
                    access : req.body.access,
                    status : "active",
                    token : ''
                });
                new_data.save(function(err, data) {
                    if (err){
                        next(err);
                    }
                    else{
                        res.status(200).json(data);
                    }
                });
            
        }
    });
}

exports.update = async function (req, res, next) {
   const { username, email , password} = req.body 
   if(username && email && password){
        const query = await reqQuery(req.query)
        usersModel.findOneAndUpdate(query, req.body, { new: true }, (err, result) => {
            if (err) {
                console.log("error user",err)
                next()
            }
            else {
                medicalOfficerModel.findOneAndUpdate({ _id: req.params._id },req.body, { new: true }, (err, result) => {
                    if (err) {
                        console.log("error user",err)
                        next()
                    }
                    else {
                        res.status(200).json(result);
                    }
                })
            }
        })
   }
}

exports.delete = async function (req, res, next) {
    const query = await reqQuery(req.query)
    usersModel.findOneAndDelete(req.params._id ? { _id: req.params._id } : query, (err, data) => {
        if (err) {
            next(err);
        }
        else {
            medicalOfficerModel.findOneAndDelete({_id : req.params?._id}, (err, result) => {
                if (err) {
                    console.log("error user",err)
                    next()
                }
                else {
                    res.status(200).json(result);
                }
            })
        }
    })
}