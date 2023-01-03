import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext} from './context/context'
const Home = () => {

    const {openSideBar} = useGlobalContext();
    return(
        <main>
            <button onClick={openSideBar} className="sidebar-toggle">
                <FaBars />
            </button>
        </main>);
}

export default Home;