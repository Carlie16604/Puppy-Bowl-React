import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Nav from './Nav.jsx';
import Puppy from './Puppy.jsx';
import Home from './Home.jsx';
import Puppies from './Puppies.jsx';

function App() {

  return (
    <>
      <div>
        <h1 className='title'>The Puppy Bowl</h1>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Puppy' element={<Puppy />} />
        <Route path='/Puppies' element={<Puppies />}/>
      </Routes>
      </div>
    </>
  )
}
export default App


{/*<Route path='/puppies/:id' element={<Pup Puppers={Puppies}/>} />*/}