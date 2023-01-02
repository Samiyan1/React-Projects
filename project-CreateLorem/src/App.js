import React from 'react';
import { useState } from 'react';
import data from './data';

function App() {
  const [count,setcount] = useState(0);
  const [text,setText] = useState([]);

  const handeleSubmit = (e)=>{
    e.preventDefault();
    let number = parseInt(count)
    if(number <= 0) number=0;
    if(number >= 4) number=4;
    
    setText(data.slice(0,number));
    console.log(text)
    }

 
  return (
   <div className='section-center '>
    <h4>لورم ایپسوم کاربردی</h4>
    <form className='lorem' onSubmit={handeleSubmit}>
      <label htmlFor='tota'>تعداد پاراگراف:</label>
      <input 
      min={1}
      max={4}
      type='number' 
      name='total' 
      value={count} 
      onChange={(e)=> setcount(e.target.value)}></input>
      <button type='submit'>بساز</button>
    </form>
    <article className='lorem-text'>
      {text.map((item ,index)=>{
        return <p key={index}>{item}</p>
      })}
    </article>

   </div>
  );

 
}

export default App;
