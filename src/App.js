import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import About from "./Components/About";
import Anniversary from "./Components/Anniversary";
import BabyOrGirl from "./Components/BabyOrGirl";
import BabyShower from "./Components/BabyShower";
import Birthday from "./Components/Birthday";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Contact from "./Components/Contact";
import CorporateEvent from './Components/CorporateEvent';
import Footer from "./Components/Footer";
import Graduation from "./Components/Graduation";
import HolidayParty from './Components/HolidayParty';
import Home from "./Components/Home";
import ItemsList from "./Components/ItemList";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import PaymentSuccess from "./Components/PaymentSuccess";
import Register from "./Components/Register";
import Reunion from './Components/Reunion';
import ThemeSelection from "./Components/ThemeSelection";
import Wedding from "./Components/Wedding";
import ARComponent from './Components/ARComponent'; // Import the ARComponent

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/items" element={<ItemsList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/themes" element={<ThemeSelection />} />
        <Route path="/themes/wedding" element={<Wedding addToCart={addToCart} />} />
        <Route path="/themes/birthday" element={<Birthday addToCart={addToCart} />} />
        <Route path="/themes/baby-shower" element={<BabyShower addToCart={addToCart} />} />
        <Route path="/themes/anniversary" element={<Anniversary addToCart={addToCart} />} />
        <Route path="/themes/baby-or-girl" element={<BabyOrGirl addToCart={addToCart} />} />
        <Route path="/themes/graduation" element={<Graduation addToCart={addToCart} />} />
        <Route path="/themes/holiday-party" element={<HolidayParty addToCart={addToCart} />} />
        <Route path="/themes/corporate-event" element={<CorporateEvent addToCart={addToCart} />} />
        <Route path="/themes/reunion" element={<Reunion addToCart={addToCart} />} />
        {/* <Route path="/ar" element={<ARComponent />} /> Add the ARComponent route */}
      </Routes>
      <ConditionalFooter />
    </Router>
  );
};

// Component to conditionally render the Footer
const ConditionalFooter = () => {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/register'];

  if (hideFooterPaths.includes(location.pathname)) {
    return null;
  }

  return <Footer />;
};

export default App;
