import React, { useRef } from "react";
import logo from "./Untitled-1.png";
import { FaBars, FaTwitter, FaTimes } from "react-icons/fa";
import { links, socials } from "./data";
import { useState } from 'react';
import { useEffect } from "react";
const Navbar = () => {
  const [show, setshow] = useState(false);
  const LinksContainerRef =useRef(null);
  const LinksRef = useRef(null)

  useEffect(() => {
    const linkshight = LinksRef.current.getBoundingClientRect().height; 
    if(show) {LinksContainerRef.current.style.height= `${linkshight}px`}
    else{ LinksContainerRef.current.style.height= '0px'}
  }, [show]);




  return (
    <nav>
      <div className="container">
        <div className="nav-logo">
          <button className="nav-toggle " onClick={()=>{setshow(!show)}}>
            {show ? <FaTimes/> : <FaBars />}
          </button>
          <img src={logo} />
        </div>
        <div className='nav-links' ref={LinksContainerRef}>
          <ul className="list" ref={LinksRef}>
            {
            links.map((link)=>{
                const {id,url,text} = link
                return (<li key={id}><a href={url}>{text} </a> </li>)

                })
            }
          </ul>
        </div>
        <ul className="nav-social">
            {
                socials.map((social)=>{
                    const {id,url,icon} = social
                    return (<li key={id}><a href={url}>{icon} </a> </li>)
    
                    })
            }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
