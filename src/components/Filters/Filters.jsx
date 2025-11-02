import React, { useState } from "react";
import "./Filters.css";

const Filters = ({ selectedCategories = [], onToggle, onClear }) => {
  const categories = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  const [open, setOpen] = useState(true);

  return (
    <aside className={`filters ${open ? "open" : "collapsed"}`}>
      <div className="filters-head">
        <h3>FILTER</h3>
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {open ? "Hide" : "Show"}
        </button>
      </div>

      <div className="filters-body">
        <div className="unselect" onClick={onClear}>
          Unselect all
        </div>
        <div className="category-list">
          {categories.map((cat) => (
            <label className="category-row" key={cat}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => onToggle(cat)}
              />
              <span className="category-label">{cat}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Filters;
