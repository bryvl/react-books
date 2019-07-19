import React from "react";

function Form({ query, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <input
          className="form-control"
          id="Title"
          type="text"
          value={query}
          placeholder="Write your book here"
          name="query"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          style={{backgroundColor: "#4b354b", color: "white"}}
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
