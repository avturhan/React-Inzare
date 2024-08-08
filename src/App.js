import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/header";
import WelcomeMessage from "./components/Welcome/WellcomeMessage.jsx";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery.jsx";
import Menu from "./components/Menu/meny.jsx";
import OrderSection from "./components/OrderObject/Order";
import Footer from "./components/Footer/footer.jsx";
import Home from "./components/Home/home.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Contacts from "./components/Contacts/contacts.jsx";
import Drinks from "./components/Drinks/drinks.jsx";
import Drawer from "./components/Drawer/Drawer";
import "./App.scss"; // Подключение стилей для корзины

function App() {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateCartItemQuantity = (id, amount) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <Header />

      {/* Добавьте навигационное меню */}
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/reviews">Отзывы</Link>
          </li>
          <li>
            <Link to="/drinks">Продукция</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route
          path="/drinks"
          element={
            <Drinks
              addToCart={addToCart}
              onCartButtonClick={() => setDrawerVisible(!isDrawerVisible)}
            />
          }
        />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      {isDrawerVisible && (
        <Drawer
          cartItems={cartItems}
          onClose={() => setDrawerVisible(false)}
          onRemoveFromCart={removeFromCart}
          onUpdateQuantity={updateCartItemQuantity}
          onClearCart={clearCart}
          isCartVisible={isDrawerVisible}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
