import "./App.css";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Explorer from "./components/Explorer/Explorer";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/my_photos" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
