import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { TabBar, Button, WhiteSpace, WingBlank } from "antd-mobile";

// import TableComponent from "./TableComponent";

// import "../style.scss";
import Listview from "./listview";
import List from "./list";
import NavBar from "./NavBar";
import PullToRefresh from "./PullToRefresh";
import ListViewRefresh from "./ListViewRefresh";
import ListViewRefreshDemo from "./ListViewRefreshDemo";

class App extends Component {
  render() {
    return (
      <Router>
        <div id='router'>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/listview" component={Listview} />
          <Route path="/navBar" component={NavBar} />
          <Route path="/topics" component={Topics} />
          <Route path="/pullToRefresh" component={PullToRefresh} />
          <Route path="/listViewRefresh" component={ListViewRefresh} />
          <Route path="/ListViewRefreshDemo" component={ListViewRefreshDemo} />
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "discover"
    };
  }

  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          textAlign: "center"
        }}
      >
        {pageText}
      </div>
    );
  }

  render() {
    return (
      <div className='container'>
        <h2>Mobile</h2>
        <div>
          <Link to="listview">listView</Link>
        </div>
        <div>
          <Link to="list">list</Link>
        </div>
        <div>
          <Link to="navBar">NavBar</Link>
        </div>
        <div>
          <Link to="pullToRefresh">PullToRefresh</Link>
        </div>
        <div>
          <Link to="listViewRefresh">ListViewRefresh</Link><br/>
          <Link to="ListViewRefreshDemo">ListViewRefreshDemo</Link>
        </div>

        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            icon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
            }}
            selectedIcon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
            }}
            title="发现音乐"
            key="discover"
            selected={this.state.selectedTab === "discover"}
            onPress={() => {
              this.setState({
                selectedTab: "discover"
              });
              
            }}
          >
            {/* {this.renderContent("发现音乐")} */}
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
            }}
            selectedIcon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
            }}
            title="我的音乐"
            key="my"
            selected={this.state.selectedTab === "my"}
            onPress={() => {
              this.setState({
                selectedTab: "my"
              });
              this.props.history.push('/ListViewRefreshDemo')
              console.log(123,this.props)

            }}
          >
            asdadf
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
            }}
            selectedIcon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
            }}
            title="朋友"
            key="friend"
            selected={this.state.selectedTab === "friend"}
            onPress={() => {
              this.setState({
                selectedTab: "friend"
              });
            }}
          >
            asdadf
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
            }}
            selectedIcon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
            }}
            title="我"
            key="me"
            selected={this.state.selectedTab === "me"}
            onPress={() => {
              this.setState({
                selectedTab: "me"
              });
            }}
          >
            asdadf
          </TabBar.Item>
        </TabBar>
      </div>
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
