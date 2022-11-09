import logo from './logo.svg';
import './App.css';
import InputTextExample from './components/inputTextExample';
import ButtonExample from './components/buttonExample';
import InputButtonTextExample from './components/inputButtonTextExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {window.__globalState('get', 'text') || 'WGlobalState example'}
        </p>
        <InputTextExample />
        <InputButtonTextExample />
        <ButtonExample />
      </header>
    </div>
  );
}

export default App;
