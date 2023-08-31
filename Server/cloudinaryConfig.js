import cloudinary from 'cloudinary';
// import dotenv from 'dotenv'
// dotenv.config();

// const api_key=process.env.CLOUDINARY_API_KEY;
// const api_secret=process.env.CLOUDINARY_API_SECRET;

cloudinary.v2.config({
  cloud_name: 'dqhkcdp4o',
  api_key: '745839529669196',
  api_secret: 'mbJv3OOWOCqLmBWAcR7iqSAx9Mk',
  secure: true,
});

export default cloudinary;
