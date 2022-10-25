import About from "./components/about";
import Banner from "./components/banner";
import Footer from "./components/footer";
import LatestRecipes from "./components/latestRecipes";
import Subscribe from "./components/subscribe";
import { useState, useEffect } from "react";

function App() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    }
  });
  return (
    <div className="App">
      <Banner mobile={mobile} />
      <LatestRecipes />
      <About />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
