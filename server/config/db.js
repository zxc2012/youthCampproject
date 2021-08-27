require('dotenv').config();
const moongoose =require('mongoose');
const connectDB=()=>{
    moongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('mongoDB connection success'))
    .catch(()=>console.log('mongoDB connection failed'))
}
module.exports=connectDB;