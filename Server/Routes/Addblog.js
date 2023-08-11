import express from 'express';
import { createBlog, getBlogs } from '../Controller/Addblogs.js';

const router = express.Router();

// Routes for blogs
router.post('/', createBlog);
router.get('/', getBlogs);

export default router;
