import React, { useEffect, useState } from 'react';
import { Button, Box, Skeleton } from '@mui/material';
import CardComp from '../components/cardComp';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRecipe, fetchRecipes } from '../redux/Actions/recipeActions';
import { getRecipes } from '../service/recipeService';

const Home = () => {
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true); //loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRecipes();
                dispatch(fetchRecipes(data)); // Dispatch action to update the store
            } catch (error) {
                console.error('Error fetching recipes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);

    return (

        <div>

            <div className="m-3 flex justify-between">
                <h1 className="m-3 text-3xl font-semibold">Recipes</h1>
                <Link to="/add-recipe">
                    <Button variant="contained" sx={{
                        height: '3rem',
                        borderRadius: '2rem',
                        boxShadow: 5,
                        marginTop: 1,
                    
                    }} color="success">Add Recipe</Button>
                </Link>
            </div>

            {loading ? (
                //skeletons while loading
                <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[...Array(6)].map((_, index) => (
                        <Box key={index} sx={{ width: 300 }}>
                            <Skeleton width="80%" animation="wave" />
                            <Skeleton width="60%" animation="wave" />
                        </Box>
                    ))}
                </div>
            ) : (
                
                // Show actual content when not loading
                <div className=" h-fit m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
            )}
        </div>
    );
};

export default Home;
