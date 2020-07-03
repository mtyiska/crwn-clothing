import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/header";

import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" component={Header} />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Router>
  );
}

export default App;
