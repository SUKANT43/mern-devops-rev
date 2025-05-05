const {getTodos,newTodo,editTodo, deleteTodo}=require('../controller/todoController')
const express=require('express')

const route=express.Router()

route.get('/todos',getTodos)
route.post('/todos',newTodo)
route.put('/todos/:id', editTodo);
route.delete('/todos/:id', deleteTodo);

module.exports=route