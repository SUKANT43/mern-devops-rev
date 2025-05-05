const express=require('express')
const app=express()
const {pool}=require('./config/db')
const route=require('./route/todoRoute')
const cors=require('cors')
app.use(cors())
app.use(express.json())

app.use('/api',route)

app.listen(3005,()=>{
  if(pool){
    console.log("db connected")
  }
    console.log("running on server")
})