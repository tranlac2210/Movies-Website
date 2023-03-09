import "./App.css";
import { Home } from "./pages";
import { SearchBox } from "./components";
import { GerneContainer } from "./components";
import { Container } from "@mui/material";
import Pagination from "./components/pagination";

function App() {
  return (
    <div className="App">
      <Container>
        <SearchBox />
        
        {/*<Home />*/}
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
        <Pagination />
      </Container>
    </div>
  );
}

export default App;
