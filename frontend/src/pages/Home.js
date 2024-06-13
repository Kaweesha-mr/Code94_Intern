import { Button } from "@mui/material";
import CardComp from "../components/cardComp";
import { Link } from "react-router-dom";

const fakeData = [
    {
        title: "Sri Lanka Chicken Curry",
        description: "A spicy and flavorful chicken curry.",
        category: "Sri Lankan",
        id: "21123"
    },
    {
        title: "Indian Butter Chicken",
        description: "A creamy and rich butter chicken.",
        category: "Indian",
        id: "21124"
    },
    {
        title: "Japanese Sushi",
        description: "Fresh and delicious sushi rolls.",
        category: "Japanese",
        id: "21125"
    },
    {
        title: "Italian Pasta",
        description: "Classic Italian pasta with tomato sauce.",
        category: "Italian",
        id: "21126"
    },
    {
        title: "Mexican Tacos",
        description: "Spicy and tasty Mexican tacos.",
        category: "Mexican",
        id: "21127"
    }
];

export default function Home() {
    return (

        <div>

            <div className="m-3 flex justify-between">
                <h1 className="m-3 text-3xl font-bold">Recipes</h1>
                    <Link to="/add-recipe">
                    <Button variant="contained" className="h-12" color="primary" href="/add-recipe">Add Recipe</Button>
                    </Link>
            </div>
            <div className="m-3 grid grid-cols-3 gap-3">
                {fakeData.map(item => (
                    <CardComp
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        id={item.id}
                    />
                ))}
            </div>

        </div>

    );
}
