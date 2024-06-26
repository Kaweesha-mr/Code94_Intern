import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { addRecipe } from "../redux/Actions/recipeActions";

export default function AddRecipe() {

    //useState to store the values of the input fields
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [errors, setErrors] = useState({ title: false, description: false, ingredients: false });

    const dispatch = useDispatch();

    const handleClear = () => {
        setTitle('');
        setDescription('');
        setIngredients('');
        setErrors({ title: false, description: false, ingredients: false });
    };


    //function to handle the add recipe button
    const handleAddRecipe = () => {
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

        console.log(hasErrors)

        if (hasErrors) {
            return;
        }
        else{
            const newRecipe = {
                title,
                description,
                ingredients,
            };
            dispatch(addRecipe(newRecipe));
            //redirect to home page
            window.location.href = '/';

        }



        
        // Optionally, clear the form fields after successful submission
        setTitle('');
        setDescription('');
        setIngredients('');
 
    };

    return (
        <div className='  md:flex m-4  md:m-3 md:absolute md:top-[15%] md:left-[35%] md:h-fit'>
            <div className="flex flex-col bg-white p-10 rounded-xl">
                <h1 className="m-3 text-3xl font-semibold text-center">Add Recipe</h1>

                <form className="flex gap-2 flex-col justify-items-center items-center" style={{ width: '100%' }}>
                    <TextField
                        required
                        label="Title"
                        value={title}
                        placeholder="Enter Name"
                        onChange={(e) => setTitle(e.target.value)}
                        error={errors.title}
                        helperText={errors.title ? "Title is required" : ""}
                        fullWidth
                    />
                    <TextField
                        required
                        multiline
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxRows={4}
                        label="Description"
                        placeholder="Describe Your Meal"
                        error={errors.description}
                        helperText={errors.description ? "Description is required" : ""}
                        fullWidth
                    />
                    <TextField
                        required
                        multiline
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        maxRows={7}
                        label="Ingredients"
                        placeholder="Enter Ingredients"
                        error={errors.ingredients}
                        helperText={errors.ingredients ? "Ingredients are required" : ""}
                        fullWidth
                    />

                    <p className="text-slate-400 m-3">
                        "Add ingredients in a comma separated list. <br/> For example: <br/> "1 cup of flour, 2 eggs, 1 cup of sugar"
                    </p>
                </form>

                <div className="flex justify-center gap-4 mt-3">
                    <Button
                        variant="contained"
                        sx={{ borderRadius: 4 }}
                        className="h-12 w-fit"
                        color="error"
                        onClick={handleClear}
                    >
                        Clear
                    </Button>

                        <Button
                            sx={{ borderRadius: 4 }}
                            variant="contained"
                            className="h-12 w-fit"
                            color="success"
                            onClick={handleAddRecipe}
                        >
                            Add Recipe
                        </Button>
                </div>
            </div>
        </div>
    );
}
