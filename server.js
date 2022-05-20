const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

const db = require("./database").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => {
        console.log(err);
    });

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));

app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/repo", express.static(path.join(__dirname, 'repo')));

const trainDriverRoute = require('./routes/trainDriverRoute')
const medicalOfficerRoute = require('./routes/medicalOfficerRoute')
const managementRoute = require('./routes/managementRoute')
const divisionRoute = require('./routes/divisionRoute')
const profileRoute = require('./routes/usersRoute')

app.use('/profile', profileRoute);
app.use('/traindriver', trainDriverRoute);
app.use('/medicalofficer', medicalOfficerRoute);
app.use('/management', managementRoute);
app.use('/division', divisionRoute);

const PORT = 300
app.listen(PORT, ()=>{
    console.log(`LRT Jakarta Akda User Service on PORT ${PORT} is connected`)
})

app.get('/', (req,res)=>{
    res.send('LRT Jakarta Akda User Service is connected');
})