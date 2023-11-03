// import cloudinary from 'cloudinary';
// import dotenv from 'dotenv';
// dotenv.config();

// cloudinary.v2.config({
//     cloud_name: 'dqhkcdp4o',
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//     secure: true,
// });

// export default cloudinary;

import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: 'dqhkcdp4o', // Replace with your Cloudinary cloud name
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const imagePath = 'D:\Project\React-Website-Medical\React-Website-Medical\Server\images'; // Replace with the local path to your image file
const uploadOptions = {
  folder: 'images',
};

cloudinary.uploader.upload(imagePath, uploadOptions, (error, result) => {
  if (error) {
    console.error('Error uploading image:', error);
  } else {
    console.log('Image uploaded successfully. URL:', result.secure_url);
    // Now you can use result.secure_url to access the uploaded image
  }
});

