import { Button } from "@mui/material";
import Textfield from "../components/TextField";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { addRecipe } from "../redux/Actions/recipeActions";

export default function AddRecipe() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const dispatch = useDispatch();

    const handleClear = () => {
        setTitle('');
        setDescription('');
        setIngredients('');
    };

    const handleAddRecipe = () => {
        const newRecipe = {
            title,
            description,
            ingredients,
        };

        dispatch(addRecipe(newRecipe));
    };

    return (
        <div className='md:flex m-4 md:m-3 md:absolute md:top-[25%] md:left-[40%] md:h-fit'>

            <div className="flex flex-col bg-white p-5 rounded-xl ">
                <h1 className="m-3 text-3xl font-semibold text-center">Add Recipe</h1>

                <form className="flex flex-col justify-items-center items-center">
                    <Textfield required={"true"} label="Title" value={title} placeholder={"Enter Name"} onChange={(e) => setTitle(e.target.value)} />
                    <Textfield required={"true"} multiline={true} value={description} onChange={(e) => setDescription(e.target.value)} maxRows={4} label="Description" placeholder="Describe Your Meal" />
                    <Textfield required={"true"} multiline={true} value={ingredients} onChange={(e) => setIngredients(e.target.value)} maxRows={7} label="Ingredients" placeholder="Enter Ingredients" />

                </form>

                <div className="flex justify-center gap-4 mt-3">
                    <Button variant="contained" sx={{ borderRadius: 4 }} className="h-12 w-fit" color="info" onClick={handleClear} >Clear</Button>
                    <Link to="/">
                        <Button sx={{ borderRadius: 4 }} variant="contained" className="h-12 w-fit" color="success" onClick={handleAddRecipe} >Add Recipe</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
