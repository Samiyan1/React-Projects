import React from 'react'
import Progress from './Progress'
import ShowData from './ShowData'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function FileUplad() {
    const [file, setfile] = useState("");
    const [filename, setfilename] = useState('انتخاب عکس')
    const [uploadpercent, setuploadpercent] = useState(0)
    const [massage, setmassage] = useState('')


    const onChange = e => {
        setfile(e.target.files[0]);
        setfilename(e.target.files[0].name)
    };



    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        axios.post("http://localhost:8000/api/upload", formData, {
            headers: {
                'content-Type': 'multipart/form-data'
            },
            onUploadProgress: porogressEvent => {
                setuploadpercent(parseInt(Math.round((porogressEvent.loaded * 100) / porogressEvent.total)))
                setTimeout(() => setuploadpercent(0), 10000)
            }
        })
            .then((res) => {
                setmassage(res.data.message)
                toast.success('تصویر با موفقیت بارگذاری شد`')
            })
            .catch(res => toast.error(`دوباره تلاش کنید`))
    }





    return (
        <>
            {massage &&
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            }
            <form onSubmit={handleSubmit}>
                <div className='form-group mt-5'>
                    <label className='custom-file-labale mb-2' htmlFor='customFile'>{filename}</label>
                    <input type="file" className='form-control' id='customFile' name='image' onChange={onChange}>
                    </input>
                    <Progress uplaodP={uploadpercent} />
                    <input type="submit" value='ارسال عکس' className='btn btn-primary mt-5 '></input>
                </div>
            </form>
            <div className="text-center">
            <Link to='/gallery' className='btn btn-success w-25 mt-3'>نمایش تصاویر</Link>
            </div>
        </>
    )
}

export default FileUplad