import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { favorites, toggleFavorite } = useContext(CartContext);
  const isFav = favorites.some((f) => f.id === product.id);

  return (
    <article className="product-card" aria-label={product.title}>
      <div className="image-wrap">
        <img
          src={product.image}
          alt={product.title}
          className="product-img"
          loading="lazy"
        />
        <button
          className={`fav-btn ${isFav ? "fav-active" : ""}`}
          onClick={() => toggleFavorite(product)}
          aria-pressed={isFav}
          aria-label="toggle favorite"
        >
          ♥
        </button>
      </div>

      <div className="card-body">
        <h4 className="prod-title">{product.title}</h4>
        <div className="price-row">
          Sign in or Create an account to see pricing
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
