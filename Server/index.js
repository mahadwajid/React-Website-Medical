import express from 'express';
import bodyParser from 'body-parser';   
import cors from 'cors';
import mongoose from 'mongoose';
import {connection} from './Connection.js';
import Createblog from './Routes/Addblog.js';
import blog from './Routes/Addblog.js';
import Routeblogshow from './Routes/Showblog.js';

const app= express();
app.listen(5000);



app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded ({extended:true}));


connection.then(()=> {
    console.log("Connection Successfull");
})
.catch((error)=>{
    console.log("Connection Error", error );
})


app.use('/Admin/Adminblog',Createblog);
app.use('/Blog',blog);
app.use('/images', express.static('images'));

app.use("/Blogshow",Routeblogshow);

