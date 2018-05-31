/**
 * 发现模块
 */
import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Button, WhiteSpace, WingBlank, NavBar, Icon } from "antd-mobile";
import TabBar from '../../components/tabBar'

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "discover"
    };
  }



  render() {
    return (
      <div className="container">
        <div className="navBar">
          <NavBar
            mode="light"
          >
            发现
          </NavBar>
        </div>
        <div className="content">
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
            <Link to="listViewRefresh">ListViewRefresh</Link>
            <br />
            <Link to="ListViewRefreshDemo">ListViewRefreshDemo</Link>
          </div>
        </div>
        <TabBar />
      </div>
    );
  }
}


export default Discover