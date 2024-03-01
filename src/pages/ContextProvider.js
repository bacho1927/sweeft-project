
import React, { createContext, useContext, useEffect, useState } from 'react';


const AppContext = createContext();


export const ContextProvider = ({ children }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        if (searchQuery !== '') {
            setSearchHistory(prevHistory => {
                if (!prevHistory.includes(searchQuery)) {
                    return [...prevHistory, searchQuery];
                }
                return prevHistory;
            });
        }
    }, [searchQuery]);
    
    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <AppContext.Provider value={{ selectedImage, openModal, closeModal,searchQuery, setSearchQuery,searchHistory ,setSearchHistory }}>
            {children}
        </AppContext.Provider>
    );
};


export const useAppContext = () => useContext(AppContext);
