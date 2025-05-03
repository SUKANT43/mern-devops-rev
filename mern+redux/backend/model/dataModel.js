const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
    },
    title:{
        type:String
    },
    description:{
        type:String
    }

},{
    timestamps:true
})

module.exports=mongoose.model('Data',schema)