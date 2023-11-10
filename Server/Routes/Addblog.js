import express from 'express';
import multer from 'multer';
import { createBlog, deleteblog, getBlogs, updateProduct,} from '../Controller/Addblogs.js';
// import upload from '../middlewares/MulterMiddleware.js';

const router = express.Router();

const storage = multer.diskStorage({
    filename:function (req ,file, cb){
        cb(null , Date.now() + '-' + file.originalname);
    },
});

const upload= multer({
    storage : storage,
    limits: {
        fieldSize: 1024 * 1024 * 100,
    },
});

// Routes for blogs
router.post('/', upload.fields([{ name: 'image' }, { name: 'authorImage' }]), createBlog);
router.get('/', getBlogs);

router.delete("/:id",deleteblog);

router.put("/:id",updateProduct);

export default router;