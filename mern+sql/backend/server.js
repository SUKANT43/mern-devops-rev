const express=require('express')
const app=express()
const mysql = require('mysql2');
const db=require('./config/db')

app.use(express.json())

app.listen(3005,()=>{
  db()
    console.log("running on server")
})