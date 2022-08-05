import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./pages/App";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Propos from "./pages/Propos";
import Error from "./pages/Error";
import StayDetails from "./pages/StayDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/stayDetails/:stayDetailsId" element={<StayDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
