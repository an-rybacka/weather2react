import "./App.css";
import SearchEngine from "./components/SearchEngine";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App-container">
      <div className="weather-container">
        <h1>Weather App</h1>
        <SearchEngine />
      </div>

      <Footer />
    </div>
  );
}

export default App;
