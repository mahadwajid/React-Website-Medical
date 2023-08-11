import express from 'express';
import bodyParser from 'body-parser';   
import cors from 'cors';
import mongoose from 'mongoose';
import {connection} from './Connection.js';
import Routes from './Routes/Addblog.js';
import blog from './Routes/Addblog.js';

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

app.use('/Admin/Adminblog',Routes);
app.use('/Blog',blog);
