import React from 'react';
import { Button } from '@mui/material';
import CardComp from '../components/cardComp';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    const recipes = useSelector(state => state.recipes); // Assuming state structure is { recipes: [] }
    const dispatch = useDispatch();

    console.log(typeof recipes, recipes)
   

    return (
        <div>
            <div className="m-3 flex justify-between">
                <h1 className="m-3 text-3xl font-bold">Recipes</h1>
                <Link to="/add-recipe">
                    <Button variant="contained" className="h-12" color="primary">Add Recipe</Button>
                </Link>
            </div>
            <div className="m-3 grid grid-cols-3 gap-3">
                {recipes.map(item => (
                    <CardComp
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        id={item.id}
                    
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
