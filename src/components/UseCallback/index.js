import React, {useCallback, useState} from "react";
import ItemsList from "../UseMemo/ItemsList";

export default function Index() {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);
    const styles = {
        color: colored ? 'red' : 'black'
    };

    const generateItemsFromApi = useCallback(() => {
        return new Array(count).fill('').map((i, index) => `element ${index+1}`)
    }, [count])

    return (
        <>
            <h1 style={styles}>{count}</h1>
            <br/>
            <button onClick={() => setCount(prev => prev+1)}>plus</button>
            <button onClick={() => setColored(prev => !prev)}>styles</button>

            <ItemsList getItems={generateItemsFromApi} />
        </>
    )
}