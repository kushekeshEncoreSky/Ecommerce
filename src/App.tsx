import React from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "../src/pages/Home";
import { Route, Routes } from "react-router";
import { UserProvider } from "./components/UserContext";
import Footer from "./components/Footer";
import Listing from "./pages/Listing";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Topbar />
        <Header />

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Listing" element={<Listing />} />
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
