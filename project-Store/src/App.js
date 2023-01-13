import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react'
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
