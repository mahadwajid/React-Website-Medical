import axios from 'axios';

const url = "https://clinic-data.onrender.com"; // Replace with your actual backend API URL

export const addBlog = async (formdata) => {
    return await axios.post(`${url}/Admin/Adminblog`, formdata);
  
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
      const response = await axios.post(`${url}/Login`, details);
  
      if (response.status === 200) {
        const { token } = response.data; // Assuming the token is returned in the response
  
        // You can handle token storage here, e.g., storing it in localStorage
        localStorage.setItem('adminToken', token);
  
        return token;
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login failed', error);
      throw error; // Rethrow the error for the caller to handle
    }
  };

  export const addService = async (formdata) =>{
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