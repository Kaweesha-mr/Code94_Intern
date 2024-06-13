import {combineReducers} from 'redux';
import recipeReducer from './Reducer/recipeReducer';

const rootReducer = combineReducers({
    recipes: recipeReducer
});

export default rootReducer;