const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const authRoute=require('./routes/auth');
const adminRoute=require('./routes/adminRoutes');
const cors=require('cors');
const path=require('path');
const connectDb=require('./db/connectDb.js');
dotenv.config();

app.use(cors());

app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/admin',adminRoute);
app.get('/',(req,res)=>{
    res.send('Backend server is running');
})
app.use(express.static(path.join(__dirname,'public')));

app.listen(process.env.PORT||5000,()=>{
    connectDb();


    console.log('Backend server is running');
})