require('dotenv').config();
const express =require('express');
const connectDB=require('./config/db');
const productRoutes=require('./routes/productRoutes');
const app=express();
connectDB();
const PORT= process.env.PORT ||5000;
app.use(express.json());
app.use('/api/products',productRoutes);
// any server errors cause this function to run
app.use((err, req, res, next) => {
    const status = err.status || 500;
    if (status === 500) {
      // 500 means Internal Server Error
      console.log("The server errored when processing a request!");
      console.log(err);
    }
  
    res.status(status);
    res.send({
      status: status,
      message: err.message,
    });
  });
app.listen(PORT,()=>console.log(`Sever running on port ${PORT}`));