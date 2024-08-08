import React from "react";
import WelcomeMessage from "../Welcome/WellcomeMessage.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Menu from "../Menu/meny.jsx";
import OrderSection from "../OrderObject/Order.jsx";
import Footer from "../Footer/footer.jsx";

function Home() {
  return (
    <div className="App">
      <WelcomeMessage />

      <Gallery />

      <Menu />

      <OrderSection />

      <Footer />
    </div>

    
  );
}

export default Home;
