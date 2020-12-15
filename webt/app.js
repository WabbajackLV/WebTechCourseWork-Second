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

const Coffee = mongoose.model("Coffee", coffeeSchema);

//RESTful API

app.get("/coffee", function(req, res){
    Coffee.find(function(err, foundCoffees){
        console.log(foundCoffees);
    });
});






app.listen(3000, function() {
    console.log("Server started on port 3000");
});