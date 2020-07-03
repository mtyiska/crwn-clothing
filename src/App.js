import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/header";

import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Route
          path="/"
          render={(props) => (
            <Header {...props} currentUser={this.state.currentUser} />
          )}
        />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Router>
    );
  }
}

export default App;
