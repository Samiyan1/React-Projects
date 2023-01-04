import React from 'react';
import { useState } from 'react';
import Categories from './Categories';
import items from './data'
import Menu from './Menu';

const allCategory = ['همه',...new Set(items.map((item)=> item.category ))]


function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategory] = useState(allCategory);

  const filterItem = (category) => {
    if(category==='همه'){
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item)=>item.category === category)  
    setMenuItems(newItem)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>محصولات ما</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItem={filterItem} categories={categories}/>
        <Menu items={menuItems} />
      </section>

    </main>
  );
}

export default App;
