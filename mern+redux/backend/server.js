const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const connectDb=require('./config/db');
const port=process.env.PORT || 5000;
const cors=require('cors');
app.use(cors());
app.use(express.json());
//imported routes
const userRoute=require('./router/userRouter');
const dataRoute=require('./router/dataRouter');
app.use((req,res,next)=>{
    console.log(req.path)
    next()
})
app.use('/api/user',userRoute);
app.use('/api/data',dataRoute);


app.listen(port,()=>{
    connectDb();
    console.log(`server is running on ${port}`)
})