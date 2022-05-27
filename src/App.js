import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import History from "./pages/history/History";
import Destinations from "./pages/destinations/Destinations";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Buildings from "./components/destinations/buildings/Buildings";
import Beaches from "./components/destinations/beaches/Beaches";
import Locations from "./components/destinations/locations/Locations";
import Nature from "./components/destinations/nature/Nature";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar home />
            <Home />
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>
          <Route path="/about">
            <Navbar />
            <History />
          </Route>
          <Route exact path="/destinations">
            <Navbar />
            <Destinations />
          </Route>
          <Route exact path="/buildings">
            <Navbar />
            <Buildings />
          </Route>
          <Route exact path="/beaches">
            <Navbar />
            <Beaches />
          </Route>
          <Route exact path="/locations">
            <Navbar />
            <Locations />
          </Route>
          <Route exact path="/nature">
            <Navbar />
            <Nature />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
