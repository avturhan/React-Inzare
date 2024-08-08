import React, { useState, useEffect } from "react";
import data from "D:/react-inzare/inzare-react/src/Data/photos.json";
import "./drinks.modules.scss"; // Импорт стилей

const Drinks = ({ addToCart, onCartButtonClick }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Загрузка данных из JSON
    setProducts(data.photos);
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const changeQuantity = (product, amount) => {
    setProducts(
      products.map((p) =>
        p.id === product.id
          ? { ...p, quantity: Math.max(1, (p.quantity || 1) + amount) }
          : p
      )
    );
  };

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div className="app">
      <header>
        <h1>Чеченские Минеральные Воды</h1>
        <button className="cart-icon" onClick={onCartButtonClick}>
          🛒
        </button>
      </header>

      <div className="switch-wrapper">
        {[
          "all",
          "drinking-water",
          "mineral-water",
          "sodas",
          "cold-teas",
          "juices",
          "cola",
          "energy-drinks",
        ].map((filter) => (
          <div
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`t-menulink-item ${
              activeFilter === filter ? "t-active" : ""
            }`}
          >
            {filter.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </div>
        ))}
      </div>

      <div className="t-storegrid-cont">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="t-storecard"
            data-category={product.category}
          >
            <div className="t-storecardwrap_all">
              <div className="t-storecardimgwrapper">
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="t-storecardimg"
                />
              </div>
              <div className="card-text-wrapper">
                <div className="card-title">{product.name}</div>
                <div className="t-storecarddescr">{product.description}</div>
                <div className="t-storecardprice">
                  Цена: <span>{product.price} руб.</span>
                </div>
                <div className="t-storecardquantity">
                  <span className="t-storecardquantitylabel">Количество:</span>
                  <button
                    className="t-storecardquantitybutton"
                    onClick={() => changeQuantity(product, -1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="t-storecardquantityinput"
                    value={product.quantity || 1}
                    readOnly
                  />
                  <button
                    className="t-storecardquantitybutton"
                    onClick={() => changeQuantity(product, 1)}
                  >
                    +
                  </button>
                </div>
                <button onClick={() => addToCart(product)}>
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
