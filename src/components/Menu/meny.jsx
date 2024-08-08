import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.modules.scss";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const menuItems = [
    {
      name: "Напиток 1",
      price: "150₽",
      img: "/public/Date/imgDrinks/100045568517b0.webp",
    },

    // Добавьте остальные пункты
  ];

  return (
    <section className="menu-container">
      <div className="menu">
        <h3>Напитки</h3>
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`menu-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              {item.name}
              <div className="details">
                <img src={item.img} alt={item.name} />
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/Drinks">
        <button className="order-button">Заказать</button>
      </Link>
    </section>
  );
};

export default Menu;
