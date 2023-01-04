import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import View from './View';

const getdata = () => {
  const data = localStorage.getItem('books');
  if (data) return JSON.parse(data);
  else return [];
}


function App() {
  const [books, setBooks] = useState(getdata())
  const [id, setId] = useState()
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
      id,
      author
    }
    setBooks([...books, book])
  }
  const deleteBook = (id) => {
    const filterbook = books.filter((element) => {
      return element.id != id
    })
    setBooks(filterbook);
  }

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))

  }, [books]);

  return (
    <div className='wrapper'>
      <h1>لیست کتاب‌ها</h1>
      <p>کتاب جدید خود را به کتابخانه اضافه کنید.</p>
      <div className='main'>
        <div className='form-container'>
          <form autoComplete='off' onSubmit={handleSubmit}>
            <div className='form-group mt-4'>
              <label>عنوان</label>
              <input type='text' className="form-control" required onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className='form-group mt-4'>
              <label>نویسنده</label>
              <input type='text' className="form-control" required onChange={(e) => setAuthor(e.target.value)}></input>
            </div>
            <div className='form-group mt-4'>
              <label>شماره</label>
              <input type='text' className="form-control" required onChange={(e) => setId(e.target.value)}></input>
            </div>
            <div className='form-group mt-4'>
              <button type='submit' className='btn btn-success btn-md'>
                افزودن
              </button>
            </div>

          </form>
        </div>
        <div className='view-container'>
          {books.length > 0 &&
            <>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#شماره</th>
                      <th>عنوان</th>
                      <th>نویسنده</th>
                      <th>حذف</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View books={books} deleteBook={deleteBook} />
                  </tbody>
                </table>
              </div>
              <button className='btn btn-danger btn-md' onClick={()=>  setBooks([])}>حذف همه</button>


            </>}
          {books.length < 1 && <p>کتابی موجود نیست</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
