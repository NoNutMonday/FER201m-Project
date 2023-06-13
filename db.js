const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://phongthhe171494:Nnm111723@cluster0.y6zloz0.mongodb.net/RentFinder';

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser: true});

var connection = mongoose.connection;

connection.on('error', () => {
    console.log("Failed");
})

connection.on('connected', () => {
    console.log("Success");
})

module.exports = mongoose