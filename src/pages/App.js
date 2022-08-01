import "../style/App.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import banner from "../assets/banner.png";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner text="Chez vous, partout et ailleurs" img={banner} />
    </div>
  );
}

export default App;
