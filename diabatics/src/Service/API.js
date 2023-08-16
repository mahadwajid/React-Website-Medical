import axios from 'axios';

const url = "http://localhost:5000"; // Replace with your actual backend API URL

export const addBlog = async (formdata) => {
    return await axios.post(`${url}/Admin/Adminblog`, formdata);
  
};

export const getBlogs = async () => {
    return await axios.get(`${url}/Blog`);
};

export const getblogbyid = async (id) =>{
    return await axios.get(`${url}/Blogshow/${id}`);
};