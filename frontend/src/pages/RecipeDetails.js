//genrate simple ui to show ingredients and steps of recie and name of the recipe

import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@mui/material";

export default function RecipeDetails() {
    const { id } = useParams();
    return (
        <div className="flex flex-col ">
            <h1 className="m-3 text-3xl font-bold text-center">Recipe Details</h1>
            <div className=" flex flex-col justify-items-center items-center">
                <h2 className="m-3 text-2xl font-bold text-center">Recipe Name</h2>
                <div className="flex flex-col justify-items-center items-center">
                    <h2 className="m-3 text-2xl font-bold text-center">Ingredients</h2>
                    <p>Ingredient 1</p>
                    <p>Ingredient 2</p>
                    <p>Ingredient 3</p>
                    <p>Ingredient 4</p>
                </div>
                <div className="flex flex-col justify-items-center items-center">
                    <h2 className="m-3 text-2xl font-bold text-center">Steps</h2>
                    <p>Step 1</p>
                    <p>Step 2</p>
                    <p>Step 3</p>
                    <p>Step 4</p>
                </div>
            </div>
            <div className="flex justify-center gap-4">
                <Button variant="contained" className="h-12 w-fit" color="info">Edit</Button>
                <Button variant="contained" className="h-12 w-fit" color="error">Delete</Button>
            </div>
        </div>
    )
}
