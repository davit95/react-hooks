import React, {useEffect, useState} from "react";

export default function ItemsList({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log(11)
        const newItems = getItems();
        setItems(newItems);
    }, [getItems]);

    return (
        <ul>
            {
                items.map(item => <li key={item}>{item}</li>)
            }
        </ul>
    )
}