import BgImg from "./assets/universal/BACKGROUND_GRADIENT.png";
import MainLogo from "./assets/images/Rectangle 1.png";
import logo from "./assets/logos/VODA WORLD_LOGO_LIGHT@4x.png";
import mainImage from "./assets/images/HOMEPAGE_TRENDY-GUY.png";
import "./App.css";

function App() {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${BgImg})`, backgroundSize: "cover" }}
    >
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="content">
        <p className="welcome"> Welcome to your world</p>
        <div className="flower-container">
          <img src={mainImage} className="mainImage" alt="mainimg" />
          <div className="overlap-rectangle">
            <img src={MainLogo} alt="Flower" />
          </div>
        </div>
        <button className="enter-button">ENTER</button>
      </div>
    </div>
  );
}

export default App;
