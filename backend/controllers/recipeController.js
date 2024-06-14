const recipeService = require('../services/recipeService');

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await recipeService.getAllRecipes();
        res.json(recipes);
    } catch (error) {

        res.status(500).send('Server Error');
    }
};

const getRecipeById = async (req, res) => {
    try {
        const recipe = await recipeService.getRecipeById(req.params.id);
        if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });
        res.json(recipe);
    } catch (error) {

        res.status(500).send('Server Error');
    }
};

const createRecipe = async (req, res) => {
    try {
        const newRecipe = await recipeService.createRecipe(req.body);
        res.json(newRecipe);
    } catch (error) {
        logger.error(error);
        res.status(500).send('Server Error');
    }
};

const updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await recipeService.updateRecipe(req.params.id, req.body);
        if (!updatedRecipe) return res.status(404).json({ msg: 'Recipe not found' });
        res.json(updatedRecipe);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await recipeService.deleteRecipe(req.params.id);
        if (!deletedRecipe) return res.status(404).json({ msg: 'Recipe not found' });
        res.json({ msg: 'Recipe removed' });
    } catch (error) {

        res.status(500).send('Server Error');
    }
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
};