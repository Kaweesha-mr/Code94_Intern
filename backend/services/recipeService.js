const Recipe = require('../models/recipiModel');

// Get all recipes
const getAllRecipes = async () => {
    return await Recipe.find();
};

// Get recipe by id
const getRecipeById = async (id) => {
    return await Recipe.findById(id);
};

// Create a new recipe
const createRecipe = async (data) => {
    const recipe = new Recipe(data);
    return await recipe.save();
};

// Update a recipe
const updateRecipe = async (id, data) => {
    return await Recipe.findByIdAndUpdate(id, data, { new: true });
};

// Delete a recipe
const deleteRecipe = async (id) => {
    return await Recipe.findByIdAndDelete(id);
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
};
