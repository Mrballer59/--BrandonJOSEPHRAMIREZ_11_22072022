import "../style/App.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import banner from "../assets/banner.png";
import Footer from "../components/Footer/Footer";
import Product from "../components/Products/Product";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <Banner text="Chez vous, partout et ailleurs" img={banner} />
      <section className="imgDisplay">
        {products.map((product) => (
          <Link to={`/stayDetails/${product.id}`}>
            <Product
              src={product.cover}
              id={product.id}
              title={product.title}
              key={product.id}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}

export default App;
