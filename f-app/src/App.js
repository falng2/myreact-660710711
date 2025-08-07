import logo from './logo.png';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Hello />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nice hax
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Do not Learn
        </a>
      </header>
      <h1>Hello Haxxer</h1>
    </div>
  );
}

export default App;
