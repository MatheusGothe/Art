import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import ArtDetails from './pages/CardDetail/ArtDetails';

function App() {

  const [theme,setTheme] = useState('light')

  const handleThemeChange = (newTheme) => {

    setTheme(newTheme)

  }


  return (
    <div className="App">
        <BrowserRouter>
        <Navbar onThemeChange={handleThemeChange} />
          <Routes>
            <Route path='/' element={<Home theme={theme} />} />
            <Route path='/art/:id' element={<ArtDetails />} />
          </Routes>
          <Footer theme={theme} />
        </BrowserRouter>
    </div>
  );
}

export default App;
