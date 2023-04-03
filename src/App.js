import './App.css';
import SearchEngine from "./SearchEngine";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <SearchEngine />
      </div>
      <footer>
        This project was coded by Aneta Rybacka with{" "}
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          React
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/an-rybacka/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
