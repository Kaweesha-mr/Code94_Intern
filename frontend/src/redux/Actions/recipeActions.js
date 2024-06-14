import { addResp, deleteResp, updateRecip } from "../../service/recipeService";

export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const FETCH_RECIPES = 'FETCH_RECIPES';


export const addRecipe = (recipe) => async dispatch => {
    await addResp(recipe);
    console.log(recipe)
    return {
        type: ADD_RECIPE,
        payload: recipe
    }
}

export const deleteRecipe = (id) => async dispatch => {
    try {
        await deleteResp(id);
        console.log('Deleted');
        dispatch({
            type: DELETE_RECIPE,
            payload: id
        });
        dispatch(fetchRecipes());
    }
    catch (err) {
        console.log(err);
    }
}

export const updateRecipe = (id,recipe) => async dispatch => {
    try {
        await updateRecip(id,recipe);
        dispatch({
            type: UPDATE_RECIPE,
            payload: recipe
        });
        dispatch(fetchRecipes());

    }
    catch (err) {
        console.log(err);
    }
}

export const fetchRecipes = (recipes) => ({
    type: FETCH_RECIPES,
    payload: recipes
});
