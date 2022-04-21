import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Route from "./components/Route";

import Journal from "./components/Journal";

const App = () => {
  return (
    <div>
      <Header />

      <Journal />

      <Footer />
    </div>
  );
};

export default App;
