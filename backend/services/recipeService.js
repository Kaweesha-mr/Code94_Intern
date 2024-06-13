const Recipe = require('../models/recipiModel');

const getAllRecipes = async () => {
    return await Recipe.find();
};

const getRecipeById = async (id) => {
    return await Recipe.findById(id);
};

const createRecipe = async (data) => {
    const recipe = new Recipe(data);
    return await recipe.save();
};

const updateRecipe = async (id, data) => {
    return await Recipe.findByIdAndUpdate(id, data, { new: true });
};

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
