import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ handleSearchSubmit }) => {
  const [search, setSearch] = useState("");
  const [maxResult, setMaxResult] = useState(24);

  console.log(search);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleMaxResult = (e) => {
    const { value } = e.target;
    setMaxResult(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchSubmit(search, maxResult);
  };

  return (
    <section className='section search'>
      <div className='search'>
        <form className='search-form' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Search..'
            name='search'
            onChange={handleSearch}
          />
          <input
            className='maxResult'
            type='number'
            placeholder='Select Max results'
            name=''
            id=''
            min={4}
            max={24}
            onChange={handleMaxResult}
          />
          <button className='btn' type='submit'>
            <FaSearch />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
