import express from 'express';
import data from './data';
import config from './config'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import userRoute from'./routes/userRoutes'

dotenv.config();

const mongodburl=config.MONGODB_URL;
mongoose 
 .connect(mongodburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
           })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));                                    

const app =express();
app.use(bodyParser.json())
app.use('/api/users',userRoute)
app.get("/api/products",(req,res)=>{
    res.send(data.products)
})
app.get("/api/products/:id",(req,res)=>{
    const productID = req.params.id;
    const product = data.products.find(x=>x._id==productID)
    if(product)
    res.send(product)
    else res.status(404).send({msg: "Product Not Product"})
})
app.listen(5000,()=>{console.log("running on 5000 port")})