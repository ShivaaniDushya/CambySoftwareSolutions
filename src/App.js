import React from "react";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
// import ContactUs from "./components/contact/ContactUs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route exact path="/contactUs" element={<ContactUs/>} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
