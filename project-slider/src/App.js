import React from 'react';
import data from './data';
import { useState } from 'react';

function App() {
  const [people, setpeople] = useState(data);
  const [index, setindex] = useState(0);

  return (
    <div className='section'>
      <div className='title'>
        <span>نظرات مشتریان</span>
      </div>
      <div className='section-center'>
        {
          people.map((item, index) => {
            const { id, image, name, title, qoute } = item;
            return (
              <article>
                <img src={image} alt={name} className='person-img'></img>
                <h4></h4>
                <p className=''></p>
                <p></p>
              </article>
            )

          })
        }
      </div>
    </div>
  )
}

export default App
