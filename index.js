const express = require("express");
const session = require('express-session');
const {MongoClient} = require('mongodb');
const dotenv = require('dotenv'); 
const  bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');
const app = express();
const connectDB = require("./database/db_config");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

dotenv.config();

app.use("/public",express.static("public"));
//Serves all the request which includes /images in the url from Images folder
connectDB();
// BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
}));
app.use("/", require("./routes/Routes"));


const PORT = process.env.PORT || 4111;

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
    });
}

app.listen(PORT, console.log("Server has st arted at port " + PORT));