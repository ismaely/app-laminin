const express = require('express')
require('dotenv').config();
const  mongoose = require('mongoose');

/**
 * conexão com banco 
 */
 mongoose.connect(process.env.DATABASE, {useNewUrlParser:true,useUnifiedTopology:true})
 .catch(e =>{
     console.error('error no conexão d banco')
 })
 const db = mongoose.connection

 module.exports = db
