import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import Textfield from '../components/TextField';
import { updateRecipe } from '../redux/Actions/recipeActions';

export default function UpdateRecipeForm() {
    const { id } = useParams(); // Extracts id from URL params (/update-recipe/:id)
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipes.find(recipe => recipe.id === id));

    // Separate state for each form field
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');

    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title);
            setDescription(recipe.description);
            setIngredients(recipe.ingredients);
        }
    }, [recipe]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleIngredientsChange = (e) => {
        setIngredients(e.target.value);
    };

    const handleUpdate = () => {
        const updatedRecipe = {
            title: title,
            description: description,
            ingredients: ingredients
        };

        dispatch(updateRecipe(id, updatedRecipe)); // Dispatch action to update recipe details
        // Redirect to home page after updating recipe
        window.location.href = '/';
    };

    // Ensure recipe exists before rendering the form
    if (!recipe) {
        return <div>Loading...</div>; // Placeholder for loading state
    }

    return (
        <div className='md:flex m-4 md:m-3 md:absolute md:top-[25%] md:left-[40%] md:h-fit'>
            <div className="flex flex-col bg-white p-5 rounded-xl ">
                <h1 className="m-3 text-3xl font-bold text-center">Update Recipe</h1>

                <form className="flex flex-col justify-items-center items-center">
                    <Textfield
                        name="title"
                        label="Title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <Textfield
                        name="description"
                        multiline={true}
                        maxRows={4}
                        label="Description"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <Textfield
                        name="ingredients"
                        multiline={true}
                        maxRows={7}
                        label="Ingredients"
                        value={ingredients}
                        onChange={handleIngredientsChange}
                    />
                </form>

                <div className="flex justify-center mt-3 gap-4">
                    <Link to="/">
                        <Button variant="contained" sx={{ borderRadius: 4 }} className="h-12 w-fit" color="info">
                            Cancel
                        </Button>
                    </Link>
                    <Button
                        variant="contained"
                        sx={{ borderRadius: 4 }}
                        className="h-12 w-fit"
                        color="success"
                        onClick={handleUpdate}
                    >
                        Update
                    </Button>
                </div>
            </div>
        </div>
    );
}
