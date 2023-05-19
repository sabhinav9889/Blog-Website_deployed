//jshint esversion:6
const express = require("express");

const bodyParser = require("body-parser");

const ejs = require("ejs");

const mongoose = require('mongoose');
require('dotenv').config();

var _ = require('lodash');

const {connectToDb} = require('./connectDb');

const app = express();

const connectionRouter = require('./router/connection');
const router = require('./router/staticRouter');

const url = process.env.URL; 
const PORT = process.env.PORT;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

connectToDb(url).then(()=>{ console.log("DB is connected"); }).catch( (e)=>{console.log(e); });

app.use(router);

app.use(connectionRouter);

app.listen(8000, function() {
  console.log("Server started on port 3000");
});