const express=require('express');
const route=express.Router();
const { getData, addData, updateData, deleteData } = require('../controller/dataController');
const {protect}=require('../middleware/userMiddleware')
route.get('/',protect,getData);
route.post('/',protect,addData);
route.put('/:id',protect,updateData);
route.delete('/:id',protect,deleteData);

module.exports=route;