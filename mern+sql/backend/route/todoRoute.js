const {getTodos,newTodo}=require('../controller/todoController')
const express=require('express')

const route=express.Router()

route.get('/todos',getTodos)
route.post('/todos',newTodo)

module.exports=route