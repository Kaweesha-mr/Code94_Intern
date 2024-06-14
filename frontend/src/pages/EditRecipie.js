import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { updateRecipe } from '../redux/Actions/recipeActions';

export default function UpdateRecipeForm() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipes.find(recipe => recipe.id === id));

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');

    const [errors, setErrors] = useState({ title: false, description: false, ingredients: false });

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
        let hasErrors = false;
        const newErrors = { title: false, description: false, ingredients: false };

        if (!title) {
            newErrors.title = true;
            hasErrors = true;
        }
        if (!description) {
            newErrors.description = true;
            hasErrors = true;
        }
        if (!ingredients) {
            newErrors.ingredients = true;
            hasErrors = true;
        }

        setErrors(newErrors);

        if (hasErrors) {
            return;
        }

        const updatedRecipe = {
            title: title,
            description: description,
            ingredients: ingredients
        };

        dispatch(updateRecipe(id, updatedRecipe));

        // Redirect to home page after updating recipe
        window.location.href = '/';
    };

    return (
        <div className="m-5 ">

            <div className='md:flex md:m- md:absolute md:top-[15%] md:left-[35%] md:h-fit'>
                <div className="flex md:w-96 flex-col bg-white p-10 rounded-xl ">
                    
                    <h1 className="m-3 text-3xl font-bold text-center">Update Recipe</h1>

                    <form className="flex flex-col gap-3 mt-3 justify-items-center items-center">
                        <TextField
                            name="title"
                            label="Title"
                            value={title}
                            onChange={handleTitleChange}
                            error={errors.title}
                            helperText={errors.title ? "Title is required" : ""}
                            fullWidth
                        />

                        <TextField
                            name="description"
                            multiline={true}
                            maxRows={4}
                            label="Description"
                            value={description}
                            onChange={handleDescriptionChange}
                            error={errors.description}
                            helperText={errors.description ? "Description is required" : ""}
                            fullWidth
                        />

                        <TextField
                            name="ingredients"
                            multiline={true}
                            maxRows={5}
                            label="Ingredients"
                            value={ingredients}
                            onChange={handleIngredientsChange}
                            error={errors.ingredients}
                            helperText={errors.ingredients ? "Ingredients are required" : ""}
                            fullWidth
                        />
                    </form>

                    <div className="flex justify-center mt-3 gap-4">
                        <Link to="/">
                            <Button variant="contained" sx={{ borderRadius: 4 }} className="h-12 w-fit" color="error">
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
        </div>
    );
}
