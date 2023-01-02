import React from 'react';
import { Icon } from 'react-icons-kit'
import {eye} from "react-icons-kit/feather/eye";
import {eyeOff} from "react-icons-kit/feather/eyeOff";
import { useState } from 'react';

function App() {
  const [type ,settype] = useState('password');
  const [icon ,seticon] = useState(eyeOff);

  const handleClick = () => {
    settype( type === 'password' ? 'text' : 'password')
    seticon( icon === eyeOff ? eye : eyeOff)
  }
  
  return (
   <div className='wrapper'>
    <div className='input-fileds'>
      <span onClick={handleClick}><Icon icon={icon} size={25}></Icon></span>
      <input type={type}></input>
      
    </div>
   </div>
  );
}

export default App;
