import React from "react";
import "./Search.css";

function Search(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange = {props.handleFormSubmit}
            name="search"
            type="text"
            className="form-group"
            placeholder = "Search For an Employee"
          />
          <br />
          <button onClick={props.handleFormSubmit} className="btn btn-dark">
            Search
          </button>
        </div>
      </form>
    );
  }
  

export default Search;