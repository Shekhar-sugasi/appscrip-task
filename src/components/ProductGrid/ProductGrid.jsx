import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import Filters from "../Filters/Filters";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

/*
  ProductGrid:
  - fetch products
  - hold selectedCategories
  - pass toggles to Filters
*/
const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetchProducts().then((data) => {
      if (mounted) setProducts(data || []);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleToggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => setSelectedCategories([]);

  const filtered = selectedCategories.length
    ? products.filter((p) => selectedCategories.includes(p.category))
    : products;

  return (
    <div className="grid-wrap container">
      <div className="left-col">
        <Filters
          selectedCategories={selectedCategories}
          onToggle={handleToggleCategory}
          onClear={clearFilters}
        />
      </div>

      <div className="right-col">
        <section className="grid">
          {filtered.length === 0 ? (
            <div className="no-results">No products found</div>
          ) : (
            filtered.map((p) => <ProductCard key={p.id} product={p} />)
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductGrid;
