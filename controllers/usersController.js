const usersModel = require('../models/usersModel')

const reqQuery = (values) => {
    const { id,username,password,token } = values
    let query = {}
    if(id){
        query = {...query,_id:id}
    }
    if(username && password){
        query = {...query,username , password}
    }
    if(token){
        query = {...query,token}
    }
    return query
}

exports.get = async function (req, res, next) {
    const query = await reqQuery(req.query)
    usersModel.find(query, (err, result) => {
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
    var new_data = new usersModel(req.body);
    new_data.save(function(err, data) {
        if (err){
            next(err);
        }
        else{
            res.status(200).json(data);
        }
    });
}

exports.update = async function (req, res, next) {
    const query = await reqQuery(req.query)
    usersModel.findOneAndUpdate(req.params._id ? { _id: req.params._id } : query, req.body, { new: true }, (err, data) => {
        if (err) {
            next(err);
        }
        else {
            res.status(200).json(data);
        }
    })
}

exports.delete = async function (req, res, next) {
    const query = await reqQuery(req.query)
    usersModel.findOneAndDelete(req.params._id ? { _id: req.params._id } : query, (err, data) => {
        if (err) {
            next(err);
        }
        else {
            res.status(200).json(data);
        }
    })
}