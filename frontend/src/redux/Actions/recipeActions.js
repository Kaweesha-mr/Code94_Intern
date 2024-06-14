export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const FETCH_RECIPES = 'FETCH_RECIPES';

export const addRecipe = (recipe) => {
    return {
        type: ADD_RECIPE,
        payload: recipe
    }
}

export const deleteRecipe = (recipeId) => {
    return {
        type: DELETE_RECIPE,
        payload: recipeId
    }
}

export const updateRecipe = (recipe) => {
    return {
        type: UPDATE_RECIPE,
        payload: recipe
    }
}

export const fetchRecipes = (recipes) => ({
    type: FETCH_RECIPES,
    payload: recipes
});
