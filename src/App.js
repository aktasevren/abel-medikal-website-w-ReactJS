

import About from "./components/About"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
// import Products from "./components/Products"
// import Product from "./components/Product"
import Services from "./components/Services"
import Home from "./components/Home"
import Ventilator from "./components/Ventilator"


import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";



const router1 = createBrowserRouter(
  createRoutesFromElements(
    /* Wrap this Root Route to create Router here */
    <Route path="/" element={<Home />}>
      <Route path="/about" element={<About />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/services" element={<Services />} />
      <Route path="/ventilator" element={<Ventilator />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);


function App() {


  return (
    <RouterProvider router={router1} />
  );
}

export default App;
