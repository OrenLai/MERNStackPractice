const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

app.use(express.json());

//DB config
const db = require ("./config/keys").mongoURI;

//connect to MongoDB

mongoose
    .connect(db,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>console.log("MongoDB connected..."))
    .catch(err=>console.log(err));

//use Routes 
//anything that goes to api/items shall refer to the items variable
app.use("/api/items",items);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log('Server started at port ' + port));
 