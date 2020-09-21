import React from "react";
import {useAlert} from "../../context/AlertContext";

export default function Alert() {
    const alert = useAlert();

    if (!alert.visible) return null;

    return (
        <p onClick={alert.hide}>{alert.text}</p>
    )
}