/**
 * beat
 */

import React, { Component } from "react";

import "./style";

export default class Beat extends Component {
  render() {
    return (
      <div className={this.props.beat === "play" ? "beat t" : "beat"}>
        <div key="1" />
        <div key="2" />
        <div key="3" />
        <div key="4" />
      </div>
    );
  }
}
