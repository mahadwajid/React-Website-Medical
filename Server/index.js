import express from 'express';
import bodyParser from 'body-parser';   
import cors from 'cors';
import mongoose from 'mongoose';
import {connection} from './Connection.js';

const app= express();

connection.then(()=> {
    console.log("Connection Successfull");
})
.catch((error)=>{
    console.log("Connection Error", error );
})

app.listen(5000);

app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded ({extended:true}));
