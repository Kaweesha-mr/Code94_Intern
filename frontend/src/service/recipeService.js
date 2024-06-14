// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/'; // Replace with your backend URL

export const getRecipes = async () => {
    const response = await axios.get(`${API_BASE_URL}/recipes`);
    return response.data;
};

export const addRecipe = async (recipe) => {
    const response = await axios.post(`${API_BASE_URL}/recipes`, recipe);
    return response.data;
};

export const deleteRecipe = async (id) => {
    await axios.delete(`${API_BASE_URL}/recipes/${id}`);
};

export const updateRecipe = async (id, recipe) => {
    const response = await axios.put(`${API_BASE_URL}/recipes/${id}`, recipe);
    return response.data;
};
