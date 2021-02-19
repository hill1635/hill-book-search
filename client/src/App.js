import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
