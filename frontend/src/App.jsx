import React from "react";
import MainContent from "./components/MainContent";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <MainContent />
      </main>
    </>
  );
};

export default App;
