import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home/Home";
import Saved from "./pages/Saved/Saved";
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";

import { Provider } from 'react-redux';
import store from './flux/store';
// import { loadUser } from './flux/actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, [])

  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  )
}

export default App;
