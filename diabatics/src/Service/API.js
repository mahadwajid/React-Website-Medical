import axios from 'axios';

const url = "https://diabaticdata.onrender.com"; 
// const url = "https://expensive-moth-jodhpurs.cyclic.app"; 
// const url = "http://localhost:5000"; 
export const addBlog = async (formdata) => {
  try {
    const response = await axios.post(`${url}/Admin/Adminblog`, formdata, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(response.data); // Log the response from the server
    return response.data;
  } catch (error) {
    console.error('Error adding blog:', error);
    throw error; // Rethrow the error to be caught by the calling component
  }
};

export const getBlogs = async () => {
    return await axios.get(`${url}/Blog`);
};

export const getblogbyid = async (id) =>{
    return await axios.get(`${url}/Blogshow/${id}`);
};

export const deleteblogbyid = async (id) =>{
    return await axios.delete(`${url}/Admin/Showblog/${id}`);
}

export const addPatientdata= async(formdata) =>{
    return await axios.post(`${url}/Admin/Patientdata`,formdata);
}

export const getPatientdata = async () =>{
    return await axios.get(`${url}/Admin/ShowPatientdata`);
}

export const deletepatientbyid = async(id) =>{
    return await axios.delete(`${url}/Admin/ShowPatientdata/${id}`);
}


export const getSignup = async (details) => {
    try {
        return await axios.post(`${url}/Login`, details);
    } catch (error) {
        console.error('Login failed', error);
        throw error; // Rethrow the error for the caller to handle
    }
};


  export const addService = async (formdata) =>{
    console.log(formdata);
    return await axios.post(`${url}/Admin/AddService`,formdata);
  }

  export const getService = async () => {
    return await axios.get(`${url}/Admin/ShowService`);
};

export const deleteServicebyid= async (id) =>{
  return await axios.delete(`${url}/Admin/ShowService/${id}`);
};

export const getServicebyid = async (id) =>{
  return await axios.get(`${url}/Servicesshow/${id}`);
};

export const updateBlogById = async (id, data) => {
  return await axios.put(`${url}/Admin/Showblog/${id}`, data);
}

export const updatePatientData = async (id, data) => {
  return await axios.put(`${url}/Admin/ShowPatientdata/${id}`, data);
}

export const updateServicebyid = async (id, data) => {
  return await axios.put(`${url}/Admin/ShowService/${id}`, data);
}