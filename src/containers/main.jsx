import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {
  TabBar,
  Button,
  WhiteSpace,
  WingBlank,
  NavBar,
  Icon
} from "antd-mobile";

import Loadable from "react-loadable";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { musicCurrentTimeAction } from "../actions/MusicAction";

import Listview from "./listview";
import List from "./list";
import navbar from "./NavBar";
import PullToRefresh from "./PullToRefresh";
import ListViewRefresh from "./ListViewRefresh";
import ListViewRefreshDemo from "./ListViewRefreshDemo";

const Loading = () => (
  <div
    style={{
      color: "red",
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    Loading...
  </div>
);

// import Discover from "./discover";
const Discover = Loadable({
  loader: () => import(/* webpackChunkName: "discover" */ "./discover"),
  loading: () => <Loading />
});

const Me = Loadable({
  loader: () => import(/* webpackChunkName: "me" */ "./me"),
  loading: () => <Loading />
});

const Video = Loadable({
  loader: () => import(/* webpackChunkName: "video" */ "./video"),
  loading: () => <Loading />
});

import My from "./my";
import ListExample from "./list";
import Rank from "./rank";
import Play from "./play";
import Audio from "../components/Audio";

class App extends Component {
  render() {
    const {
      status,
      current: { id },
      currentTime
    } = this.props.musicData;

    return (
      <Router>
        <div id="router">
          <Audio
            status={status}
            currentTime={currentTime}
            src={id && `http://music.163.com/song/media/outer/url?id=${id}.mp3`}
            musicCurrentTimeAction={this.props.musicCurrentTimeAction}
          />

          <Route exact path="/" component={Discover} />
          <Route exact path="/me" component={Me} />
          <Route path="/my" component={My} />
          <Route path="/video" component={Video} />
          <Route path="/rank" component={Rank} />
          <Route path="/list" component={List} />
          <Route path="/listview" component={Listview} />
          <Route path="/navBar" component={navbar} />
          <Route path="/topics" component={Topics} />
          <Route path="/pullToRefresh" component={PullToRefresh} />
          <Route path="/listViewRefresh" component={ListViewRefresh} />
          <Route path="/ListViewRefreshDemo" component={ListViewRefreshDemo} />
          <Route path="/play/:id" component={Play} />
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

const mapStateToProps = state => ({
  dataSource: state.RankReducer.list,
  musicData: state.MusicReducer
});

const mapDispatchToPros = dispatch => ({
  musicCurrentTimeAction: bindActionCreators(musicCurrentTimeAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(App);
