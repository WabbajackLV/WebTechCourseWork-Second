/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/CafeDB", {useNewUrlParser: true});

const coffeeSchema = {
    title: String,
    price: Number
};

const Coffee = mongoose.model("coffee", coffeeSchema);

//RESTful API

app.get("/coffees", function(req, res){
    Coffee.find(function(err, foundCoffees){
        if(!err){
            res.send(foundCoffees);
        }else{
            res.send(err);
        }
    });
});

app.post("/coffees", function(req, res){
    const newCoffee = new Coffee({
        title: req.body.title,
        price: req.body.price
    });

    newCoffee.save();
});

app.delete("/coffees", function(req, res){
    Coffee.deleteMany(function(err){
        if(!err){
            res.send("Successfully deleted the whole coffee menu.");
        }else{
            res.send(err);
        }
    });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});