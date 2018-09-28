/**
 * 账号模块
 */
import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import TabBar from "../../components/tabBar";
import List from "./list";

class Me extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="navBar">
          <NavBar mode="light">我</NavBar>
        </div>
        <div className="content">
          <List />
        </div>
        <TabBar />
      </div>
    );
  }
}

export default Me;
