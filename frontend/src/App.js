
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ResponsiveAppBar from './components/NavBar';
import AddRecipe from './pages/AddRecipe';
import UpdateRecipeForm from './pages/EditRecipie';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path='/edit-recipe/:id' element={<UpdateRecipeForm />} />
      </Routes>    
      </div>
  );
}

export default App;
