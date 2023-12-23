import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
