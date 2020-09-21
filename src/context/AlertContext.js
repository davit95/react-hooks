import React, {createContext, useContext, useState} from "react";

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext)
}

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false);
    const toggle = () => setAlert(prev => !prev);

    return (
        <AlertContext.Provider value={{
            alert,
            toggle
        }}>
            { children }
        </AlertContext.Provider>
    )
}