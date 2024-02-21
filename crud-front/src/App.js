import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddList from './AddList';
import Listing from './Listing';
import UpdateList from './UpdateList';



function App(){

  

  return(
    <div className='App' >
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
    <Route path='/'element={<Listing/>} ></Route>
      <Route path='/addlist' element={<AddList/>}></Route>
      <Route path='/update/:id' element={<UpdateList/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}



export default App;
