require('dotenv').config();
const express =require('express');
const connectDB=require('./config/db');
const productRoutes=require('./routes/productRoutes');
const app=express();
connectDB();
const PORT= process.env.PORT ||5000;
app.use(express.json());
app.use('/api/productRoutes',productRoutes);

app.listen(PORT,()=>console.log(`Sever running on port ${PORT}`));