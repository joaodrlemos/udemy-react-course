import React, { useState, useContext } from 'react'
import { createContext } from 'react';

const GlobalContext = createContext();

export const Context = ({children}) => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);

    const openSidebar = () =>{
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () =>{
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return <GlobalContext.Provider value={{isSidebarOpen ,openSidebar,closeSidebar, isModalOpen,openModal,closeModal}}>
        {children}
    </GlobalContext.Provider>

}

export const useOrigContext = () => {
    return useContext(GlobalContext);
}
