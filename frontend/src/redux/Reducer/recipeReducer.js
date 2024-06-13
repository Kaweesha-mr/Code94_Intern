
import { ADD_RECIPE,DELETE_RECIPE,UPDATE_RECIPE } from "../Actions/recipeActions";

const initialState = {
    recipes: []
}

const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
            }
        case UPDATE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.map(recipe => recipe.id === action.payload.id ? action.payload : recipe)
            }
        default:
            return state
    }
}

export default recipeReducer;