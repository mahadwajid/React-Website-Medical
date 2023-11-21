import fs from 'fs/promises';
import ServiceModel from '../Model/AddService.js';
import cloudinary from '../cloudinaryConfig.js';

export const createService = async (req, res) => {
  const { title, Content, image } = req.body;

  try {
    // Assuming image is a base64 encoded string representing the image data
    const base64Image = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Image, 'base64');

    // Write the image data to a file in a temporary directory
    const tempImagePath = './images/'; // Change this to your desired location
    await fs.writeFile(tempImagePath, buffer);

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(tempImagePath, {
      folder: 'services',
    });

    // Create a new service using the Cloudinary URL
    const newService = new ServiceModel({
      title,
      Content,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });

    // Save the service to the database
    const savedService = await newService.save();
    console.log(savedService);

    // Respond with success message
    res.json({ Response: true, message: 'Added Successfully' });
    console.log('Service added successfully');

    // Remove the temporary image file
    await fs.unlink(tempImagePath);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
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