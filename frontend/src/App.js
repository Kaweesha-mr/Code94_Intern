import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        
      </div>
     
    </div>
  );
}

export default App;
