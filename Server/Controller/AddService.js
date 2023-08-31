import ServiceModel from '../Model/AddService.js';
import cloudinary from '../cloudinaryConfig.js';

export const createService = async (req, res) => {
    const { title, Content, } = req.body;
    const imagePath = req.files['image'][0].filename;
  
  
    try {
      
    const imageUploadResult = await cloudinary.uploader.upload(req.files['image'][0].path);
    const publicId = imageUploadResult.public_id;
    console.log(publicId);

    
      const newService = new ServiceModel({
        title,
        Content,
        image: publicId,
       
      });
  
       const savedProduct = await newService.save();
       console.log(savedProduct);
  
       res.json({Response:true , message:'Added Successfully '});
       console.log("Product added successfully");
    } catch (error) {
    console.log(error);
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