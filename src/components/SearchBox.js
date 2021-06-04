import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa3">
      <input
        value={searchfield}
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
      ;
    </div>
  );
};

export default SearchBox;
