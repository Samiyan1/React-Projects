import React from "react";
import { links } from './data';
import logo from "./logo.png"
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from "./context/context";

const SideBar = () => {
    const {isOpenSidebar,closeSideBar} = useGlobalContext();

    return (
        <aside className={isOpenSidebar ? "sidebar show-sidebar" : "sidebar"}>
            <div className="sidebar-header">
                <img src={logo} className="logo" aly="logo"></img>
                <button onClick={closeSideBar} className="close-btn">
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {
                    links.map((link) => {
                        {
                            const { id, url, icon, text } = link    
                            return(
                                < li key={id}>
                                <a href={url}>{icon} {text} </a>    
                                    </li>
                            )  
                        }
                    })
                }
        </ul>

        </aside >
    );
}

export default SideBar;