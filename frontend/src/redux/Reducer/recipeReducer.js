// src/redux/reducers/recipeReducer.js
import { ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, FETCH_RECIPES } from "../Actions/recipeActions";

const initialState = [];

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return [...state, action.payload];
        case DELETE_RECIPE:
            return state.filter(recipe => recipe.id !== action.payload);
        case UPDATE_RECIPE:
            return state.map(recipe =>
                recipe.id === action.payload.id ? action.payload : recipe
            );
        case FETCH_RECIPES:
            // Directly return the fetched recipes as the new state
            return action.payload.map(recipe => ({
                id: recipe._id, // Use the MongoDB _id as the id
                title: recipe.title,
                description: recipe.description
            }));
        default:
            return state;
    }
};

export default recipeReducer;
