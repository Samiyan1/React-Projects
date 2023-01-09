import React from 'react';
import data from './data';
import { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { useEffect } from 'react';
function App() {
  const [people, setpeople] = useState(data);
  const [index, setindex] = useState(0);

  useEffect(() => {
    let lastindex = people.length - 1;
    if (index > lastindex) setindex(0);
    if (index < 0) setindex(lastindex);


  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setindex(index + 1)

    }, 3000);
    return () => clearInterval(slider)

  }, [index]);


  return (
    <div className='section'>
      <div className='title'>
        <span>نظرات مشتریان</span>
      </div>
      <div className='section-center'>
        {
          people.map((item, personindex) => {
            const { id, image, name, title, qoute } = item;
            let position = 'nextSlide'

            if (personindex === index) {
              position = 'activeSlide'
            }
            if (personindex === index - 1 || (index === 0 && personindex === people.length - 1)) {
              position = 'lastSlide'
            }


            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className='person-img'></img>
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='qoute'>{qoute}</p>
              </article>
            )

          })
        }

        <button className='next' onClick={() => setindex(index + 1)}><FiChevronRight /></button>
        <button className='prev' onClick={() => setindex(index - 1)}><FiChevronLeft /></button>
      </div>
    </div>
  )
}

export default App
