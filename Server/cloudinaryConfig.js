import cloudinary from 'cloudinary';
import dotenv from 'dotenv'
dotenv.config();

const api_key=process.env.CLOUDINARY_API_KEY;
const api_secret=process.env.CLOUDINARY_API_SECRET;

cloudinary.v2.config({
  cloud_name: 'dqhkcdp4o',
  api_key,
  api_secret,
  secure: true,
});

export default cloudinary;
