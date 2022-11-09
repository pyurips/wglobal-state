import App from "../App";

const { useState } = require("react");

function GlobalState() {

    const [text, setText] = useState('WGlobalState example');
    const [buttonText, setButtonText] = useState('');

    window.__globalState = (method, state, value) => {
        switch (method) {
            case 'set':
                switch (state) {
                    case 'text':
                        return setText(value);
                    case 'buttonText':
                        return setButtonText(value);
                    default:
                        throw Error ('(Global State) Undefined state: ' + state);
                }
        
            case 'get':
                switch (state) {
                    case 'text':
                        return text;
                    case 'buttonText':
                        return buttonText;
                    default:
                        throw Error ('(Global State) Undefined state: ' + state);
                }

            default:
                throw Error ('Global State) Invalid method: ' + method);
        }
    }

    return (
        <App/>
    );
}

export default GlobalState;