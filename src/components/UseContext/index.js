import React from "react";
import {useAlert} from "../../context/AlertContext";

export default function Index() {
    const { toggle } = useAlert();
    return (
        <>
            <h1>Context</h1>
            <button onClick={toggle}>show alert</button>
        </>
    )
}