
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ResponsiveAppBar from './components/NavBar';
import AddRecipe from './pages/AddRecipe';
import UpdateRecipeForm from './pages/EditRecipie';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path='/edit-recipe/:id' element={<UpdateRecipeForm />} />
        <Route path='/recipe-details/:id' element={<RecipeDetails />} />
      </Routes>    
      </div>
  );
}

export default App;
