import React from "react";
import "./drinks.modules.scss"; // Проверьте правильность пути и имени файла

const ProductCard = ({ product, handleQuantityChange, addToCart }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));
  const handleAddToCart = () =>
    addToCart(product.name, product.price, quantity);

  return (
    <div className="card-container">
      <div className="product-card">
        <div className="product-card__image">
          <img
            src={product.imgSrc}
            alt={product.name}
            className="product-card__img"
          />
        </div>
        <div className="product-card__details">
          <h2 className="product-card__title">{product.name}</h2>
          <p className="product-card__description">{product.description}</p>
          <div className="product-card__price">
            Цена: <span>{product.price} руб.</span>
          </div>
          <div className="product-card__quantity">
            <button
              className="product-card__quantity-button"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="product-card__quantity-display">{quantity}</span>
            <button
              className="product-card__quantity-button"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button
            className="product-card__add-to-cart"
            onClick={handleAddToCart}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
