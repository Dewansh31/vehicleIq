// const express = require('express');
const mongoose = require('mongoose');

const DB = "mongodb+srv://blog-upd:Exter@cluster0.xwelu8m.mongodb.net/car"

mongoose.connect(DB)
    .then(()=>{ console.log("DB Connected Successfully");

    // const carTwo = new Car({
    //     vehichleId: 101,
    //     model:"Virtus",
    //     fuelLevel:"23L",
    //     range: '432kms',
    //     fan:'2',
    //     ac:'23.3'
    // });
    
    // carTwo.save().then(console.log("Saved succesfully")).catch((err) => {console.log(err)});
        
})
    .catch((err)=>{console.log(err)});

const carSchema = new mongoose.Schema({
    vehichleId: {type: Number, required: true},
    model:{ type: String, required: true},
    fuelLevel:{ type: String, required: true},
    range:{ type: String, required: true},
    fan:{ type: String, required: true},
    ac:{ type: String, required: true},
},{timestamps: true});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;