import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home/Home";
import Saved from "./pages/Saved/Saved";
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <div className="container">

        <Router>
          <div>

            <Jumbo title={"New York Times Search"} />

            <NavTabs />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
          </div>
        </Router>

        <Footer />
      </div>
    </>
  )
}

export default App;
