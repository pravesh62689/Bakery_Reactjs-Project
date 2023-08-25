import "./App.css";
import NavBar from "./Components/Navbar/navbar";
import LandingHead from "./Components/LandingHead/LandingHead";
import OurStory from "./Components/OurStory/OurStory";
import FreshIngredient from "./Components/FreshIngredient/FreshIngredient";
import Products from "./Components/Products/Products";
import Testimonials from "./Components/Testimonials/Testimonials";
import Latest from "./Components/Latest/Latest";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <div style={{ display: "block" }}>
          <NavBar />
        </div>
        <div style={{ display: "block" }}>
          <LandingHead />
        </div>
        <div>
          <OurStory />
        </div>
        <div>
          <FreshIngredient />
        </div>
        <div>
          <Products />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <Latest />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
