import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  const navLinks = [
    { name: "About", link: "/" },
    { name: "Careers", link: "/" },
    { name: "Events", link: "/" },
    { name: "Products", link: "/" },
    { name: "Support", link: "/" },
  ];

  return (
    <div className="">
      <Navbar links={navLinks} />
      <Hero />
      <About />
      <Products />
      <Footer links={navLinks} />
    </div>
  );
}

export default App;
