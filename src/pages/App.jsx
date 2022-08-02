import "../style/App.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import banner from "../assets/banner.png";
import Footer from "../components/Footer/Footer";
import Product from "../components/Products/Product";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("DataLogement.json")
      .then((res) => {
        console.log("Getting from....", res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log);
  }, []);
  return (
    <div className="App">
      {/* <Header /> */}
      <Banner text="Chez vous, partout et ailleurs" img={banner} />
      <section className="imgDisplay">
        {products.map((product) => (
          <Product src={product.cover} id={product.id} title={product.title} />
        ))}
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
