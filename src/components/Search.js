import React from "react";
import "./Search.css";

function Search(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange = {props.handleInputChange}
            name="search"
            type="text"
            className="form-group"
            placeholder = "Search For an Employee"
          />
          <br />
        </div>
      </form>
    );
  }
  

export default Search;