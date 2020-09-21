import React, {useEffect, useMemo, useState} from "react";

function delay(num) {
    console.log('delay')
    let i = 0;
    while (i < 1000000000) i++;
    return num*2;
}

export default function Index() {
    const [number, setNumber] = useState(10);
    const [colored, setColored] = useState(false);
    const styles = useMemo(() => ({
        color: colored ? 'red' : 'black'
    }), [colored]);

    const computed = useMemo(() => {
        return delay(number)
    }, [number]);

    useEffect(() => {
        console.log('styles changed')
    }, [styles])

    return (
        <>
            <h1 style={styles}>{computed}</h1>
            <br/>
            <button onClick={() => setNumber(prev => prev+1)}>plus</button>
            <button onClick={() => setNumber(prev => prev-1)}>minus</button>
            <button onClick={() => setColored(prev => !prev)}>warning</button>
        </>
    )
}