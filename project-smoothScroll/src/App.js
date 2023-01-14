import React from 'react';
import { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa'
import { useEffect } from 'react';
function App() {
  const [showbtn, setShowbtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 400) setShowbtn(true)
      else setShowbtn(false)
    })
  }, []);

  const backtoTop = () => {
    window.scroll({top: 0})
  }


  return (
    <div>
      <section id='section-one'>بخش اول</section>
      <section id='section-two'> بخش دوم</section>
      <section id='section-three'>بخش سوم</section>
      <section id='section-four'>بخش چهارم</section>
      {/* <a href='#' className={showbtn ? 'to-top active' : 'to-top'}>
        <FaChevronUp />
      </a> */}
      <button onClick={backtoTop} className={showbtn ? 'to-top active' : 'to-top'}>
        <FaChevronUp />
      </button>
    </div>
  );
}

export default App;
