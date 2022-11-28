import React, { useState, useContext } from 'react';

const Context = React.createContext();

export function useMainContext() {
    return useContext(Context);
}
export function MainProvider({ children }) {
    const [data, setData] = useState();
    const [toast, setToast] = useState({
        isActive: false,
        message: ''
    });
    const [cart, setCart] = useState([]);
    return (
        <Context.Provider value={
            {
                data, setData, toast, setToast, cart, setCart
            }
        }>
            {children}
        </Context.Provider>
    );
};