import { useEffect, useState } from "react";

function InputButtonTextExample() {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        window.__globalState('set', 'buttonText', inputValue);
    }, [inputValue]);

    return (
        <input type='text' style={{marginBottom: '10px', padding: '5px'}} placeholder="value changed on click" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
    );
}

export default InputButtonTextExample;