// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api/recipes'; // Replace with your backend URL

export const getRecipes = async () => {
    const response = await axios.get(`${API_BASE_URL}/`);
    console.log(response.data);
    return response.data;
};

export const addRecipe = async (recipe) => {
    const response = await axios.post(`${API_BASE_URL}/recipes`, recipe);
    return response.data;
};

export const deleteResp = async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`);
};

export const updateRecipe = async (id, recipe) => {
    const response = await axios.put(`${API_BASE_URL}/recipes/${id}`, recipe);
    return response.data;
};
