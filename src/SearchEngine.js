import "./App.css";

export default function SearchEngine() {
    return (
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-control"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    );
}