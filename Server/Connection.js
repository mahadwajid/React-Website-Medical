import mongoose from "mongoose";    
import dotenv from 'dotenv';
dotenv.config();

const apikey=process.env.MONGODB_URL;

const connection = mongoose.connect(apikey , {useUnifiedTopology: true, useNewUrlParser: true})

export {connection}
