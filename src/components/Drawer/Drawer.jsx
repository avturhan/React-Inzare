import React from "react";
import "./Drawer.modules.scss"; // Импорт стилей

const Drawer = ({
  cartItems,
  onClose,
  onRemoveFromCart,
  onUpdateQuantity,
  onClearCart,
  isCartVisible,
}) => {
  return (
    <div className={`cart ${isCartVisible ? "show" : ""}`}>
      <div className="cart-content">
        <h1 className="cart-h1">Корзина</h1>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-quantity">
                    <button
                      className="quantity-button"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="quantity-input"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      className="quantity-button"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-price">
                    {item.price * item.quantity} руб.
                  </div>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Удалить
                </button>
              </div>
            ))}
            <button className="cart-button" onClick={onClearCart}>
              Очистить корзину
            </button>
          </>
        ) : (
          <div className="cart-empty-message">
            <img
              src="/imgGallery/empty-cart.jpg"
              alt="Пустая корзина"
              className="empty-cart-img"
            />
            Ваша корзина пуста. Добавьте хотя бы один товар, чтобы сделать
            заказ.
            <button className="empty-button" onClick={onClose}>
              Вернуться к товарам
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
