import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function ShowData() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/upload-data')
            .then(res => setdata(res.data))
    }, []);

    return (
        <div className='show-data mt-5'>
            <div className="container">
                <div className="text-center">
                    <Link to='/' className='btn btn-success w-25 mb-3'>آپلود عکس</Link>
                </div>
                <div className='row'>
                    {
                        data && data.map((item) => {
                            return (
                                <div className='col-lg-3 mt-4' key={item.id}>
                                    <img src={`http://localhost:8000/back/images/` + item.image} alt='' className='w-100' style={{ height: '200px', objectFit: 'cover' }}></img>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ShowData