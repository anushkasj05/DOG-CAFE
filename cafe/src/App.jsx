import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Banner />
      <About />
    </>
  );
}

export default App;
