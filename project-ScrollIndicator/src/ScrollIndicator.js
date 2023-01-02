import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ScrollIndicator() {
  const [scrollTop, setScrollTop] = useState(0);
  const onscroll = () => {
    const winscroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winscroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
     window.addEventListener('scroll' , onscroll)
  }, []);



  return (
    <div className="wrapper">
      <div className="progressbar">
        <div
          className="progressbarMain"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
