

import About from "./components/About"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Home from "./components/Home"
import Ventilator from "./components/Ventilator"
import HomeNavbar from './components/HomeNavbar';
import HomeNav from './components/HomeNav';
import Footer from './components/Footer';
import Product from './components/Product';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <HomeNavbar />
        <hr></hr>
        <HomeNav />
        <hr></hr>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/ventilator" element={<Ventilator />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <hr></hr>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
