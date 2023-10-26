import "./App.css";
// import Footer from "./compenents/Footer/Footer";
import Hero from "./compenents/header/Hero/Hero";
import Header from "./compenents/header/Header";
import Slider from "./compenents/header/Slider/Slider";
import  Virtual  from "./compenents/Virtual/Virtual";
import Products from "./compenents/Products/Products";
import Testimonial from "./compenents/Testimonials/Testimonials";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonial/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
