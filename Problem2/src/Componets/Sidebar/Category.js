
import React from 'react';
import './Category.css';

export default function Category({ setSelectedCategory }) {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };


  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className='sidebar-label-container' >
          <input
            type="radio"
            name="category"
            value="All"
            onChange={() => handleCategoryChange("All")}
          />
          <span className='checkmark'></span>All
        </label>
        <label className='sidebar-label-container' >
          <input
            type="radio"
            name="category"
            value="TV"
            onChange={() => handleCategoryChange("TV")}
          />
          <span className='checkmark'></span>TV
        </label>
        <label className='sidebar-label-container'>
          <input
            type="radio"
            name="category"
            value="Camera"
            onChange={() => handleCategoryChange("Camera")}
          />
          <span className='checkmark'></span>Camera
        </label>
        <label className='sidebar-label-container' >
          <input
            type="radio"
            name="category"
            value="Oven"
            onChange={() => handleCategoryChange("Oven")}
          />
          <span className='checkmark'></span>Oven
        </label>
        <label className='sidebar-label-container' >
          <input
            type="radio"
            name="category"
            value="Refrigerator"
            onChange={() => handleCategoryChange("Refrigerator")}
          />
          <span className='checkmark'></span>Refrigerator
        </label>
        <label className='sidebar-label-container' >
          <input
            type="radio"
            name="category"
            value="Tools"
            onChange={() => handleCategoryChange("Tools")}
          />
          <span className='checkmark'></span>Tools
        </label>
        <label className='sidebar-label-container' >
          <input
            type="radio"
            name="category"
            value="Cables"
            onChange={() => handleCategoryChange("Cables")}
          />
          <span className='checkmark'></span>Cables
        </label>
      </div>
    </div>
  );
}
