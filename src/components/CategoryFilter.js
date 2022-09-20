import React from "react";

function CategoryFilter({ categories, onCategorySelect, selectedCategory }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} value={category} className={(selectedCategory === category) ? "selected" : ""} onClick={() => onCategorySelect(category)}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
