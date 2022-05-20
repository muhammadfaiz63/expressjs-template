const divisionModel = require('../models/divisionModel')

const reqQuery = (values) => {
    const { id,name,level } = values
    let query = {}
    if(id){
        query = {...query,_id:id}
    }
    if(name){
        query = {...query,name}
    }
    if(level){
        query = {...query,level}
    }
    return query
}

exports.get = async function (req, res, next) {
    const query = await reqQuery(req.query)
    divisionModel.find(query, (err, result) => {
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
    var new_data = new divisionModel(req.body);
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
    divisionModel.findOneAndUpdate(req.params._id ? { _id: req.params._id } : query, req.body, { new: true }, (err, data) => {
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
    divisionModel.findOneAndDelete(req.params._id ? { _id: req.params._id } : query, (err, data) => {
        if (err) {
            next(err);
        }
        else {
            res.status(200).json(data);
        }
    })
}