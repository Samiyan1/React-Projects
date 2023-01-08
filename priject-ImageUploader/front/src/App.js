import React from 'react';
import Main from './coponent/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowData from './coponent/ShowData';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='gallery' element={<ShowData/>}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
