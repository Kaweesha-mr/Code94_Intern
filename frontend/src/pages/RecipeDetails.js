import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Box, Skeleton } from "@mui/material";
import { getRecipbyId } from '../service/recipeService';

export default function RecipeDetails() {
    const { id } = useParams(); 
    const [recipe, setRecipe] = useState(null); 

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const data = await getRecipbyId(id); 
                setRecipe(data); 
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe(); 
    }, [id]); 

    // Split ingredients string into an array
    const ingredientsArray = recipe ? recipe.ingredients.split(',').map(ingredient => ingredient.trim()) : [];

    return (
        <div className='flex justify-center mt-9'>
            {recipe ? (
                <div className="flex flex-col m-3 md:m-0 bg-white p-12 rounded-xl">
                    <h2 className="m-3 text-4xl font-bold text-center">{recipe.title}</h2>
                    <div className="flex flex-col items-center">
                        <h2 className="m-3 text-xl font-bold text-center">Description</h2>
                        <p className='flex flex-wrap min-w-2'>{recipe.description}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="m-3 text-2xl font-bold text-center">Ingredients</h2>
                        <ul className="list-disc">
                            {ingredientsArray.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-10 flex justify-center gap-4">
                        <Link to="/">
                            <Button variant="contained" sx={{ borderRadius: 4 }} className="h-12 w-fit" color="info">
                                Back to Recipes
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col bg-white p-12 rounded-xl">
                    <Box sx={{ width: 300, marginBottom: 2 }}>
                        <Skeleton variant="text" animation="wave" width="100%" height={50} />
                    </Box>
                    <Box sx={{ width: 300, marginBottom: 2 }}>
                        <Skeleton variant="text" animation="wave" width="100%" height={30} />
                    </Box>
                    <Box sx={{ width: 300, marginBottom: 2 }}>
                        <Skeleton variant="text" animation="wave" width="100%" height={30} />
                    </Box>
                    <Box sx={{ width: 300, marginBottom: 2 }}>
                        <Skeleton variant="rectangular" animation="wave" width="100%" height={150} />
                    </Box>
                    <Box sx={{ width: 300, marginBottom: 2 }}>
                        <Skeleton variant="rectangular" animation="wave" width="100%" height={50} />
                    </Box>
                    <Box sx={{ width: 300, marginBottom: 2 }}>
                        <Skeleton variant="rectangular" animation="wave" width="100%" height={50} />
                    </Box>
                    <Box sx={{ width: 300 }}>
                        <Skeleton variant="rectangular" animation="wave" width="100%" height={50} />
                    </Box>
                </div>
            )}
        </div>
    );
}
