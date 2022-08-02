import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./pages/App";
// import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Propos from "./pages/Propos";
import Error from "./pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
