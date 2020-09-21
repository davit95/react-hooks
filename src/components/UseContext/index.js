import React from "react";
import {useAlert} from "../../context/AlertContext";

export default function Index() {
    const { show, hide } = useAlert();
    return (
        <>
            <h1>Context</h1>
            <button onClick={() => show('text from show')}>show alert</button>
        </>
    )
}