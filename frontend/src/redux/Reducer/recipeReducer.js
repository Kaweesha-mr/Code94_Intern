import { ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE } from "../Actions/recipeActions";

const initialState = [
    {
        id: 1,
        title: 'Chicken Curry',
        description: 'This is a chicken curry recipe'
    },
    {
        id: 2,
        title: 'Chicken Biryani',
        description: 'This is a chicken biryani recipe'
    },
    {
        id: 3,
        title: 'Chicken Fry',
        description: 'This is a chicken fry recipe'
    }
];

const recipeReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};

export default recipeReducer;
