import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="menu">
        <div>
          <Link to="rank">音乐</Link>
        </div>
        <div>
          <Link to="video">视频</Link>
        </div>
        <div>
          <Link to="rank">音乐</Link>
        </div>
        <div>
          <Link to="rank">音乐</Link>
        </div>
      </div>
    );
  }
}
