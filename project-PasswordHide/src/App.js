import React from 'react';
import { Icon } from 'react-icons-kit'
import {eye} from "react-icons-kit/feather/eye";
import {eyeOff} from "react-icons-kit/feather/eyeOff";
import { useState } from 'react';
//const regixEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//const regixPhone = /^(0|98)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/mg;

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
