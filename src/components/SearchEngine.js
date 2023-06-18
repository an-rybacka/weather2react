import "./SearchEngine.css"
import "bootstrap/dist/css/bootstrap.css";

export default function SearchEngine() {
  return (
    <div className="main-card">
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-control"
          autoFocus="on"
          id="search-input"
        />
        <input type="submit" value="Search" className="btn btn-light" />
        <button
          type="submit"
          class="btn btn-success current-location"
          id="button-location"
        >
          Current Location
        </button>
      </form>
    </div>
  );
}
