import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
