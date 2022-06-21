/** @format */

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
	const [search, setSearch] = useState('');
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
    <section className="section search">
      <div className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={handleSearch}/>
    
          <button className='btn' type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
