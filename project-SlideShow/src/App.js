import React from 'react';
import { useState } from 'react';
import Reviwe from './Review';

function App() {

  return (
  <main>
    <div className='container'>
      <div className='title'>
        <h2> نظزات همکاران</h2>
      </div>
      <Reviwe/>
    </div>
  </main>
  );
}

export default App;
