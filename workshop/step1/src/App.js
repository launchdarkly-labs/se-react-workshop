import { useFlags } from 'launchdarkly-react-client-sdk';
import logo from './logo.svg';
import './App.css';

function App() {
  const { darkMode } = useFlags();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
            Dark mode flag value = {darkMode ? 'true': 'false'}
        </p>
      </header>
    </div>
  );
}

export default App;