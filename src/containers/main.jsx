import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { TabBar, Button, WhiteSpace, WingBlank, NavBar, Icon } from "antd-mobile";

import Listview from "./listview";
import List from "./list";
import navbar from "./NavBar";
import PullToRefresh from "./PullToRefresh";
import ListViewRefresh from "./ListViewRefresh";
import ListViewRefreshDemo from "./ListViewRefreshDemo";

import Discover from "./discover";
import Me from "./me";
import My from "./my";
import ListExample from "./list";


class App extends Component {
  render() {
    return (
      <Router>
        <div id="router">
          <Route exact path="/" component={Discover} />
          <Route exact path="/me" component={Me} />
          <Route path="/my" component={My} />
          <Route path="/list" component={List} />
          <Route path="/listview" component={Listview} />
          <Route path="/navBar" component={navbar} />
          <Route path="/topics" component={Topics} />
          <Route path="/pullToRefresh" component={PullToRefresh} />
          <Route path="/listViewRefresh" component={ListViewRefresh} />
          <Route path="/ListViewRefreshDemo" component={ListViewRefreshDemo} />
        </div>
      </Router>
    );
  }
}



const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
