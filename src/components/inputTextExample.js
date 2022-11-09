import { useEffect, useState } from "react";

function InputTextExample() {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        window.__globalState('set', 'text', inputValue);
    }, [inputValue]);

    return (
        <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder="type something" style={{marginBottom: '50px', padding: '5px'}}/>
    );
}

export default InputTextExample;