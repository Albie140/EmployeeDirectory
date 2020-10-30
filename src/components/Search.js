import React from "react";

function Search(props) {
    return (
      <form>
        <div className="form-group margin: 0">
          <label htmlFor="search">Search:</label>
          <input
            onChange = {props.handleFormSubmit}
            name="search"
            type="text"
            className="form-control"
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