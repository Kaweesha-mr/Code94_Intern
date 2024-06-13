
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ResponsiveAppBar from './components/NavBar';
import AddRecipe from './pages/AddRecipe';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>    
      </div>
  );
}

export default App;
