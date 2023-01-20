import React from 'react';
import { useState } from 'react';
import { Users } from './users'
import Table from './Table';
function App() {

  const [query, setQuery] = useState('');
  const keys = ['first_name','last_name','email']
  const search = (data) => {
    return data.filter((item) =>
    keys.some((key)=> item[key].toLowerCase().includes(query))
    );
  }

  console.log(query)


  return (
    <div className='app'>
      <input placeholder='جستحو' type='text' onChange={(e) => setQuery(e.target.value)} ></input>

      <Table data={search(Users)} />

    </div>
  );
}

export default App;
