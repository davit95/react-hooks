import React, {createContext, useContext, useState, useReducer} from "react";

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext)
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW': return {
            ...state,
            visible: true,
            text: action.text
        }
        case 'HIDE': return {
            ...state,
            visible: false
        }
        default: return state
    }
}

export const AlertProvider = ({ children }) => {
    // const [alert, setAlert] = useState(false);
    // const toggle = () => setAlert(prev => !prev);

    const [state, dispacth] = useReducer(reducer, {
        visible: false,
        text: ''
    });

    const show = (text) => dispacth({type: 'SHOW', text});
    const hide = () => dispacth({type: 'HIDE'});

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show,
            hide
        }}>
            { children }
        </AlertContext.Provider>
    )
}