import Addblog from '../Model/Addblog.js';

// Create a new blog
export const createBlog = async (req, res) => {
  try {
    const { title, files, content, publishDateTime } = req.body;

    const newBlog = new Addblog({
      title,
      files,
      content,
      publishDateTime,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Addblog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error getting blogs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
