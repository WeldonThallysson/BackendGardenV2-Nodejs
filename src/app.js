require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const conn = require('./db/com');

conn();



//Routes

const router = require('./routes/router');

app.use('/api',router);
app.listen(3000, function(){
    console.log('servidor online')
});