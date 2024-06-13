import { Button } from "@mui/material";
import Textfield from "../components/TextField";
import Selector from "../components/Selector";



export default function AddRecipe() {
    return (
        <div className="flex flex-col ">
            <h1 className="m-3 text-3xl font-bold text-center">Add Recipe</h1>

            <div className=" flex flex-col justify-items-center items-center">
               
                <Textfield label="Title" />
                <Selector />
                <Textfield multiline={true}  maxRows={4} label="Description" placeholder="Descibe Your Meal"/>
                <Textfield multiline={true}  maxRows={7} label="Ingridients" placeholder="Enter Ingridients" />
                <Textfield label="Time" />
            </div>

            <div className="flex justify-center gap-4">
                <Button variant="contained" className="h-12 w-fit" color="info">Clear</Button>
                <Button variant="contained" className="h-12 w-fit" color="success">Add</Button>

            </div>

        </div>
    )
}