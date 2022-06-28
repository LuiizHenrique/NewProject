import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';


const app = express()

app.use(routes)
app.use(express.json())

mongoose.connect('SUA CONEXÃO AQUI COM O MONGODB')
.then((data)=>{
    console.log("MongoDB Connection Succeeded", data.version);
})

.catch((err)=>{
   console.log('Error in DB Connection', err.message) 
})

app.listen(4200,()=> console.log('Server running on port http://localhost:4200'))