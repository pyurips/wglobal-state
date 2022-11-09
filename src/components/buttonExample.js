function ButtonExample() {

    const inputAboveValue = window.__globalState('get', 'buttonText');

    return (
        <button type="button" onClick={() => window.__globalState('set', 'text', inputAboveValue)} style={{padding: '5px'}}>
            Click to set the text with the input value above
        </button>
    );
}

export default ButtonExample;