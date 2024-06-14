/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { getRecipbyId } from '../service/recipeService';

export default function RecipeDetails() {
    const { id } = useParams(); // Extract id from URL params
    const [recipe, setRecipe] = useState(null); // State to hold recipe data

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const data = await getRecipbyId(id); // Call your service function to fetch recipe by ID
                setRecipe(data); // Update state with fetched recipe data
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe(); // Call fetchRecipe function when component mounts
    }, [id]); // Dependency array ensures effect runs when id changes

    // If recipe is null or undefined, display loading or error message
    if (!recipe) {
        return <div>Loading...</div>; // You can replace this with a loading spinner or message
    }

    // Split ingredients string into an array
    const ingredientsArray = recipe.ingredients.split(',').map(ingredient => ingredient.trim());

    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <h2 className="m-3 text-2xl font-bold text-center">{recipe.name}</h2>
                <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <h2 className="m-3 text-2xl font-bold text-center">Description</h2>
                    <p>{recipe.description}</p>
                </div>
                    <h2 className="m-3 text-2xl font-bold text-center">Ingredients</h2>
                    <ul className="list-disc">
                        {ingredientsArray.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className="mt-10 flex justify-center gap-4">
                <Link to="/">
                    <Button variant="contained" className="h-12 w-fit" color="info">Back to Recipes</Button>
                </Link>
            </div>
        </div>
    )
}
