import express from 'express';
import multer from 'multer';
import { createService, deleteService, getService, getServicebyid } from '../Controller/AddService.js';


const router = express.Router();

const storage = multer.diskStorage({
    destination:function(req , file , cb){
        cb(null ,'./images/');
    },
    filename:function (req ,file, cb){
        cb(null , Date.now() + '-' + file.originalname);
    },
});

const upload= multer({storage : storage});

router.post('/',upload.fields([{ name: 'image' }]), createService);

router.get('/', getService);


router.delete("/:id",deleteService);

export default router;