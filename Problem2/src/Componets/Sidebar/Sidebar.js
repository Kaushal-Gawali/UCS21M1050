import React from 'react';
import './Sidebar.css'
import Category from './Category';

export default function Sidebar({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
  <div>
    <form className="d-flex Form-Serach one" role="search">
        <input
          className="form-control me-2"
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

    <div className='sidebar'>
      <Category setSelectedCategory={setSelectedCategory} />
    </div>
  </div>
  );
}


