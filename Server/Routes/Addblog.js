import express from 'express';
import multer from 'multer';
import { createBlog, getBlogs,} from '../Controller/Addblogs.js';

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

// Routes for blogs
router.post('/',upload.fields([{ name: 'image' }, { name: 'authorImage' }]), createBlog);
router.get('/', getBlogs);


export default router;