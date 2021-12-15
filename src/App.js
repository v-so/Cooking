import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

//page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

//styles
import './App.css'

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create" element={<Create />} />
        
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App
