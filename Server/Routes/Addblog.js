import express from 'express';
import { createBlog, deleteblog, getBlogs, updateProduct } from '../Controller/Addblogs.js';

const router = express.Router();

// Routes for blogs
router.post('/', createBlog);
router.get('/', getBlogs);
router.delete("/:id", deleteblog);
router.put("/:id", updateProduct);

export default router;
