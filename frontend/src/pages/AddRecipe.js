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
            id: 1329018390128,  // You can use a better ID generation strategy
            title,
            description,
            ingredients,
        };
        dispatch(addRecipe(newRecipe));

    };
    return (
        <div className="flex flex-col ">
            <h1 className="m-3 text-3xl font-bold text-center">Add Recipe</h1>

            <div className=" flex flex-col justify-items-center items-center">
               
                <Textfield  label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Textfield multiline={true} value={description} onChange={(e) => setDescription(e.target.value)} maxRows={4} label="Description" placeholder="Descibe Your Meal"/>
                <Textfield multiline={true} value={ingredients} onChange={(e) => setIngredients(e.target.value)} maxRows={7} label="Ingridients" placeholder="Enter Ingridients" />
            </div>

            <div className="flex justify-center gap-4">
                <Button variant="contained" className="h-12 w-fit" color="info"onClick={handleClear} >Clear</Button>
                
                <Link to="/">
                    <Button variant="contained" className="h-12 w-fit" color="success"onClick={handleAddRecipe} >Add Recipe</Button>
                </Link>

            </div>

        </div>
    )
}