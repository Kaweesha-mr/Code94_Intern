import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import CardComp from '../components/cardComp';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRecipe, fetchRecipes } from '../redux/Actions/recipeActions';
import { getRecipes } from '../service/recipeService';

const Home = () => {
    const recipes = useSelector(state => state.recipes); // Assuming state structure is { recipes: [] }
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getRecipes();
            dispatch(fetchRecipes(data)); // Dispatch action to update the store
        };

        fetchData();
    }, [dispatch]);

    
    return (
        <div>

            <div className="m-3 flex justify-between">
                <h1 className="m-3 text-3xl font-bold">Recipes</h1>
                <Link to="/add-recipe">
                    <Button variant="contained" className="h-12" color="primary">Add Recipe</Button>
                </Link>
            </div>


            <div className="m-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {recipes.map(item => (
                    <CardComp
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        id={item.id}
                        onDelete={() => dispatch(deleteRecipe(item.id))}
                    />
                ))}
            </div>

        </div>
    );
};

export default Home;
