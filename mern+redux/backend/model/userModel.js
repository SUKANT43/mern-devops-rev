const mongoose = require('mongoose');


const schema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter your name'],
    },
    email:{
        type:String,    
        required:[true,'Please enter your email'],
        unique:true,
    },
    password:{  
        type:String,
        required:[true,'Please enter your password'],
    }
},
{
    timestamps:true,
}
);
module.exports=mongoose.model('User',schema);