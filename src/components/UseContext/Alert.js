import React from "react";
import {useAlert} from "../../context/AlertContext";

export default function Alert() {
    const { alert } = useAlert();

    if (!alert) return null;

    return (
        <p>alert</p>
    )
}