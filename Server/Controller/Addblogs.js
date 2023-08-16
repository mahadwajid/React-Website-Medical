import BlogModel from '../Model/Addblog.js';

// Create a new blog
export const createBlog = async (req, res) => {
  const { title, content, publishDate , author, } = req.body;
  const imagePath = req.files['image'][0].filename;
  const authorImagePath = req.files['authorImage'][0].filename;


  try {
  
    const newBlog = new BlogModel({
      title,
      author,
      content,
      publishDateTime: new Date(publishDate),
      image: imagePath,
      authorImage: authorImagePath,
     
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

export const getblogbyid = async (req, res) =>{
  try{
    const { id } = req.params; 
    const blog = await BlogModel.findById(id); 
    if(!blog){
      return res.status(404).json({message:"Not Found"})
    }
    res.json(blog);
  }catch(error){
    console.log("Error...",error);
    res.status(500).json({message:"Error Internal server"});
  }
};