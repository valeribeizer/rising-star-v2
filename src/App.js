import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Locations from "./components/Locations";
import Pricing from "./components/Pricing";
import Member from "./components/Member";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <NavBar />
          <Banner />
          <AboutUs />
          <Locations />
          <Pricing />
          <Member />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
