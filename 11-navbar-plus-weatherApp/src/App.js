import React, {useEffect} from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Weather from './Weather';

function App() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    navigate('/weather');
  }, []);

  return (
    <>
        <div className="container">
          <div className='App'>
          <Navbar />
            <Routes>
              <Route exact path="/" element={
                <Home />
                } />
              <Route className='' path="/about" element={<h2>About</h2>} />
              <Route path="/weather" element={
                <Weather />
              } />
              <Route path="/projects" element={<h2>Projects</h2>} />
              <Route path="/contact" element={<h2>Contact</h2>} />
              <Route path="/profile" element={<h2>Profile</h2>} />
            </Routes>
          </div>
        </div>
    </>
  )
}

export default App
