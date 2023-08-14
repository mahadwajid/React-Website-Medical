import BlogModel from '../Model/Addblog.js';

// Create a new blog
export const createBlog = async (req, res) => {
  const { title, content, publishDate ,image} = req.body;

  try {
  
    const newBlog = new BlogModel({
      title,
      image: req.file.path,
      content,
      publishDateTime: new Date(publishDate),
    });

     const savedProduct = await newBlog.save();
     console.log(savedProduct);

     res.json({Response:true , message:'Added Successfully '});
     console.log("Product added successfully");
  } catch (error) {
  console.log(error);
  }
};

// Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).json(blogs);
    
  } catch (error) {
    console.error('Error getting blogs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
