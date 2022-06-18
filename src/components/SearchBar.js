import React, { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  console.log(search);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSearchSubmit(search);
  };

  return (
    <div className='search'>
      <form class='form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search..'
          name='search'
          onChange={handleSearch}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
