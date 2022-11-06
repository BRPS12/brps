import "./App.css";
import Product from "./Pages/Product";
import Header from "./Pages/header";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";
import Services from "./Pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

      <div className="Body">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Login" element={<Login />} />
          </Routes>

          <Footer instagram="Instagram" />
        </BrowserRouter>
      </div>

  );
}

export default App;
