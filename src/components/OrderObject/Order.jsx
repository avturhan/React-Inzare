import React from "react";
import "./Order.modules.scss";
import { Link } from "react-router-dom";

const OrderSection = () => (
  <section className="order-section">
    <h2>Как сделать заказ</h2>
    <div className="order-steps">
      <div className="step">
        <h3>Шаг 1</h3>
        <p>Выберите нужные продукты из нашего меню.</p>
      </div>
      <div className="step">
        <h3>Шаг 2</h3>
        <p>Заполните информацию о заказе.</p>
      </div>
      <div className="step">
        <h3>Шаг 3</h3>
        <p>Подтвердите заказ и выберите способ оплаты.</p>
      </div>
    </div>
    <Link to="/Drinks">
      <button className="order-button">Вернуться к напиткам</button>
    </Link>
  </section>
);

export default OrderSection;
