import axios from 'axios';

const url = "http://localhost:5000"; // Replace with your actual backend API URL

export const addBlog = async (blogData) => {
  try {
    const response = await axios.post(`${url}/Admin/Adminblog`, blogData);
    return response.data; // Return the response data from the server
  } catch (error) {
    console.error("Error adding blog:", error);
    throw error; // Throw the error for the component to handle
  }
};

export const getBlogs = async () => {
  try {
    const response = await axios.get(`${url}/Blog`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};