import React from "react";
import { useState } from "react";
import { useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)

    const openSideBar = () => {
        setIsOpenSidebar(true)
        console.log(isOpenSidebar)
    }
    const closeSideBar = () => {
        setIsOpenSidebar(false)
    }

    return <AppContext.Provider value={{ isOpenSidebar, closeSideBar, openSideBar }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };    