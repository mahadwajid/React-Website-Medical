import ServiceModel from '../Model/AddService.js';
import cloudinary from '../cloudinaryConfig.js';

export const createService = async (req, res) => {
    const { title, Content } = req.body;

    try {
        const image = req.files.image;

        // Specify the folder in which to store the image
        const folderName = 'Assessts'; // Replace with the actual folder name
        const uploadOptions = {
            folder: folderName,
        };

        // Use cloudinary to upload the image to Cloudinary with folder option
        cloudinary.uploader.upload(image.tempFilePath, uploadOptions, async (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
            } else {
                console.log("Image uploaded to Cloudinary:", result);

                // Continue with saving the service to the database
                // ...

                res.json({ Response: true, message: 'Added Successfully' });
                console.log('Service added successfully');
            }
        });
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