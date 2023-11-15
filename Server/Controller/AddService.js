import ServiceModel from '../Model/AddService.js';
import cloudinary from '../cloudinaryConfig.js';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();


AWS.config.update({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  region:process.env.AWS_REGION,
});

const s3 = new AWS.S3();

export const createService = async (req, res) => {
  const { title, Content } = req.body;

  try {
    // Upload image to S3
    const imageUploadParams = {
      Bucket: 'cyclic-expensive-moth-jodhpurs-sa-east-1', // Replace with your S3 bucket name
      Key: `services/${Date.now()}_${req.file.originalname}`,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };

    const imageUploadResult = await s3.upload(imageUploadParams).promise();

    // Create a new service entry
    const newService = new ServiceModel({
      title,
      Content,
      image: {
        url: imageUploadResult.Location,
      },
    });

    // Save the service entry to the database
    const savedService = await newService.save();

    console.log(savedService);

    res.json({ Response: true, message: 'Added Successfully' });
    console.log('Service added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ Response: false, message: 'Internal Server Error' });
  }
};


  export const getService = async (req, res) => {
    try {
      const Service = await ServiceModel.find();
      res.status(200).json(Service);
      
    } catch (error) {
      console.error('Error getting blogs:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  export const deleteService = async (req , res ) =>{
    try{
      const {id} = req.params;
      await ServiceModel.findByIdAndDelete(id);
      res.json({message:'Delete Successfully'});
    }catch(error){
      res.status(500).json({error:'Internal Server Error'});
    }
  }

  export const getServicebyid = async (req, res) =>{
    try{
      const { id } = req.params; 
      const Service = await ServiceModel.findById(id); 
      if(!Service){
        return res.status(404).json({message:"Not Found"})
      }
      res.json(Service);
    }catch(error){
      console.log("Error...",error);
      res.status(500).json({message:"Error Internal server"});
    }
  };

  export const updateService = async (req, res) => {
    const { id } = req.params;
    const { title, Content } = req.body;
    try {
      const updatedProduct = await ServiceModel.findByIdAndUpdate(
        id,
        {title, Content },
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