import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import ArtDetails from './pages/ArtDetails/ArtDetails';
import Favorites from './pages/Favorites/Favorites';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/art/:id' element={<ArtDetails />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
