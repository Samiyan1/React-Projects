import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => {
        setData(resp.data)
        console.log(data)
      })
  }
  const downloadPdf = () => {
    const pdf = new jsPDF();
    pdf.autoTable({ html: '#table' })
    pdf.save("user.pdf")

  }

  return (
    <div className='container'>


      <h1 className='text-center py-5'>دانلود جدول به‌صورت pdf</h1>
      <div className='pb-5'>
        <button className='btn btn-primary  ' onClick={getData}>نمایش جدول</button>
      </div>
      {
        data.length > 0 && (

          <div className='download-data'>
            <Jump>
              <button onClick={downloadPdf} className='btn btn-success'>دانلود جدول</button>

              <h2 className='py-5 text-center'>جدول اطلاعات</h2>
            </Jump>
            <Fade bottom>
              <table className='table table-borderless' id='table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((item) => {
                      return (

                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{String(item.completed)}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </Fade>
          </div>
        )
      }
    </div >
  );
}

export default App;
