import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Nav from './Nav.jsx';
import Puppy from './Puppy.jsx';
import Home from './Home.jsx';
import Puppies from './Puppies.jsx';

function App() {
  const [puppies, setPuppies] = useState([]);
  
  useEffect(() => {
    const fetchPuppies = async() => {
      const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players');
      console.log(data);
      setPuppies(data);
    }
    fetchPuppies();
  },[])

  return (
    <>
      <div>
        <h1>Stinky</h1>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Puppy' element={<Puppy />} />
        <Route path='/Puppies' element={<Puppies />}/>
        <Route path='/Puppies/:id' element={<AllPuppies/>}/>
      </Routes>
      </div>
    </>
  )
}
export default App