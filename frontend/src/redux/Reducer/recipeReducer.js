import { ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE,FETCH_RECIPES } from "../Actions/recipeActions";

const initialState = [
    
];

const recipeReducer = (state = initialState, action) => {

    console.log(action.payload);
    switch (action.type) {
        case ADD_RECIPE:
            return [
                ...state,
                action.payload
            ];
        case DELETE_RECIPE:
            return state.filter(recipe => recipe.id !== action.payload);
        case UPDATE_RECIPE:
            return state.map(recipe =>
                recipe.id === action.payload.id ? action.payload : recipe
            );
        case FETCH_RECIPES:
            const newRecipes = action.payload.map(recipe => ({
                id: recipe._id, // Use the MongoDB _id as the id
                title: recipe.title,
                description: recipe.description
            }));

            // Combine the received recipes with the existing initialState array
            const mergedRecipes = [...state, ...newRecipes];
            return mergedRecipes;
    
        default:
            return state;
    }
};

export default recipeReducer;
