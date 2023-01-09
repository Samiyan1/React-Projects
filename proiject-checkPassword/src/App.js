import React from 'react';
import Progress from './Progress';
import { useState } from 'react';

function App() {
  const [password, setpassword] = useState("");

  return (
    <div className='container'>
      <div className="col-md-6 mx-auto">
        <h3 className='text center py-5'>رمزعبور خود را وارد کن</h3>
        <div className='from-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='پسورد شما'
            onChange={(e => setpassword(e.target.value))}
          >

          </input>
        </div>
        <Progress password={password}/>
      </div>
    </div>
  );
}

export default App;
