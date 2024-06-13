import { Button } from "@mui/material";
import Textfield from "../components/TextField";
import Selector from "../components/Selector";
import { Link } from "react-router-dom";



export default function UpdateRecipeForm() {
    return (
        <div className="flex flex-col ">
            <h1 className="m-3 text-3xl font-bold text-center">Update Recipe</h1>

            <div className=" flex flex-col justify-items-center items-center">
                <Textfield label="Title" />
                <Textfield multiline={true}  maxRows={4} label="Description" placeholder="Descibe Your Meal"/>
                <Textfield multiline={true}  maxRows={7} label="Ingridients" placeholder="Enter Ingridients" />
            </div>

            <div className="flex justify-center gap-4">
                <Link to="/">
                <Button variant="contained" className="h-12 w-fit" color="info">Cancel</Button>
                </Link>
                <Button variant="contained" className="h-12 w-fit" color="success">Update</Button>

            </div>

        </div>
    )
}