import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    files: { type: String, required: true },
    content: { type: String, required: true },
    publishDateTime: { type: Date, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
