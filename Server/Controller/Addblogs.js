import BlogModel from '../Model/Addblog.js';
import cloudinary from '../cloudinaryConfig.js';

// Create a new blog
// export const createBlog = async (req, res) => {
//   const { title, content, publishDate , author, authorImage, image } = req.body;

//   try {
    
//     const imageUploadResult = await cloudinary.uploader.upload(req.files['image'][0].path, {
//       folder: "images",
//     });
//     const authorImageUploadResult = await cloudinary.uploader.upload(req.files['authorImage'][0].path, {
//       folder: "images",
//     });

//     const newBlog = new BlogModel({
//       title,
//       author,
//       content,
//       publishDateTime: new Date(publishDate),
//       authorImage: {
//         public_id: authorImageUploadResult.public_id,
//         url: authorImageUploadResult.secure_url
//       } ,
//       image: {
//         public_id: imageUploadResult.public_id,
//         url: imageUploadResult.secure_url
//       },
     
//     });

//      const savedProduct = await newBlog.save();
//      console.log(savedProduct);

//      res.json({Response:true , message:'Added Successfully '});
//      console.log("Product added successfully");
//   } catch (error) {
//   console.log(error);
//   }
// };


import AWS from 'aws-sdk';
import BlogModel from '../models/BlogModel'; // Import your BlogModel
import { v4 as uuidv4 } from 'uuid';

// Configure AWS SDK with your AWS credentials and region
AWS.config.update({
  accessKeyId: 'ASIAYTMTJLTCA3XJRETZ',
  secretAccessKey: 'z2DEsSfkVJAJUE8QaVxx+2tRD/aQpkClfgJeVUlM',
  region: 'ca-central-1', // Replace with your desired AWS region
});

const s3 = new AWS.S3();

// Create a new blog
export const createBlog = async (req, res) => {
  const { title, content, publishDate, author, authorImage, image } = req.body;

  try {
    // Generate unique filenames for images using UUID
    const imageFileName = `images/${uuidv4()}.jpg`;
    const authorImageFileName = `images/${uuidv4()}.jpg`;

    // Upload images to S3 bucket
    const imageUploadParams = {
      Bucket: 'cyclic-wild-cummerbund-newt-ca-central-1', // Replace with your S3 bucket name
      Key: imageFileName,
      Body: req.files['image'][0].buffer,
      ContentType: 'image/jpeg', // Adjust the content type based on your file type
      ACL: 'public-read', // Set the appropriate ACL for your use case
    };

    const authorImageUploadParams = {
      Bucket: 'cyclic-wild-cummerbund-newt-ca-central-1', // Replace with your S3 bucket name
      Key: authorImageFileName,
      Body: req.files['authorImage'][0].buffer,
      ContentType: 'image/jpeg', // Adjust the content type based on your file type
      ACL: 'public-read', // Set the appropriate ACL for your use case
    };

    await Promise.all([
      s3.upload(imageUploadParams).promise(),
      s3.upload(authorImageUploadParams).promise(),
    ]);

    // Create a new blog instance with S3 image URLs
    const newBlog = new BlogModel({
      title,
      author,
      content,
      publishDateTime: new Date(publishDate),
      authorImage: {
        url: `https://cyclic-wild-cummerbund-newt-ca-central-1.s3.ca-central-1.amazonaws.com/${authorImageFileName}`,
      },
      image: {
        url: `https://cyclic-wild-cummerbund-newt-ca-central-1.s3.ca-central-1.amazonaws.com/${imageFileName}`,
      },
    });

    // Save the new blog to the database
    const savedBlog = await newBlog.save();

    res.json({ Response: true, message: 'Added Successfully' });
    console.log('Blog added successfully:', savedBlog);
  } catch (error) {
    console.error('Error adding blog:', error);
    res.status(500).json({ Response: false, message: 'Internal Server Error' });
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

export const deleteblog = async (req , res ) =>{
  try{
    const {id} = req.params;
    await BlogModel.findByIdAndDelete(id);
    res.json({message:'Delete Successfully'});
  }catch(error){
    res.status(500).json({error:'Internal Server Error'});
  }
}

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedProduct = await BlogModel.findByIdAndUpdate(
      id,
      {title, content },
      { new: true }
    );
    if (updatedProduct) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};