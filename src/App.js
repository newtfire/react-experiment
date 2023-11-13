import logo from './logo.svg';
import './App.css';
import puffin from './images/puffin1.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={puffin} className="puffin" alt="Puffin from Iceland" />
        <p>
          Here's a puffin I met off the northeast coast of Iceland.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
