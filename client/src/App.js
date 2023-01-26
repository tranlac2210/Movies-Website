import './App.css';
import { Home } from './pages';
import { SearchBox } from './components';
import { GerneContainer } from './components';

function App() {
  return (
    <div className='App'>
      <SearchBox />
      <Home />
      {/* <GerneContainer /> */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
