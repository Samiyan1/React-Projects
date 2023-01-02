import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4tsyqih",
        "template_du8xhkh",
        e.target,
        "S60fXFknu653Ov0_z"
      )
      .then((result) => {
        if(result.status === 200) toast.success('پیام شما با موفقیت ارسال شد',{position:"top-right",closeOnClick:true})
      },(error)=>{
        
      });
  };

  return (
    <div className="container py-5">
      <div className="row py-5 justify-content-center">
        <div className="col-md-4 bg-white p-5 mt-5">
          <h2 className="pb-5 text-center">ارسال پیام به مدیریت</h2>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control p-3"
                placeholder="نام‌ شما"
              ></input>
            </div>
            <div className="form-group">
              <input
                name="email"
                type="text"
                className="form-control p-3"
                placeholder="ایمیل شما"
              ></input>
            </div>
            <div className="form-group">
              <textarea
                placeholder="پیام شما"
                name="massage"
                className="form-control p-3"
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success w-100 p-2 text-white mt-5"
              >
                ارسال{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;
