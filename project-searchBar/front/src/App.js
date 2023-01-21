import React from 'react';
import { useState, useEffect } from 'react';
import { Users } from './users'
import Table from './Table';
import axios from 'axios';
function App() {

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  // const keys = ['first_name', 'last_name', 'email'];

  // const search = (data) => {
  //   return data.filter((item) =>
  //   keys.some((key)=> item[key].toLowerCase().includes(query))
  //   );
  // }

  useEffect(() => {
    const fetchSearch = async () => {
      const res = await axios.get(`https://localhost:5000?q=${query}`)
      setData(res.data);
    }
    fetchSearch()
  }, [query]);

  console.log(query)


  return (
    <div className='app'>
      <input placeholder='جستحو' type='text' onChange={(e) => setQuery(e.target.value)} ></input>

      <Table data={data} />

    </div>
  );
}

export default App;
