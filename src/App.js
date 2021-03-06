import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Main/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { useSelector } from "react-redux";
import "./App.css";
import Messenger from "./components/Messenger";
function App() {
  const { user } = useSelector((store) => store.users);
  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" />} />
        <Route
          path="/home"
          exact
          element={!user ? <Navigate to="/login" /> : <Home />}
        />
        <Route
          path="/login"
          exact
          element={!user ? <Auth /> : <Navigate to="/home" />}
        />
        <Route
          path="/messenger"
          exact
          element={!user ? <Navigate to="/login" /> : <Messenger />}
        />
        <Route
          path="*"
          exact
          element={!user ? <Navigate to="/login" /> : <Navigate to="/home" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
