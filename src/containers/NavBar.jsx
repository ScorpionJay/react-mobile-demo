import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  changeEvent(e) {
    console.log(e.target.value);
    this.setState(
      {
        value: e.target.value
      },
      () => console.log("callback")
    );
  }

  change2 = () => {
    console.log(this.el.value);
    this.setState({
      value: this.el.value
    });
  };

  render = () => (
    <div>
      <input
        type="text"
        value={this.state.value}
        onChange={e => this.changeEvent(e)}
      />

      <input
        type="text"
        value={this.state.value}
        ref={el => (this.el = el)}
        onChange={this.change2}
      />

      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log("onLeftClick")}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
          <Icon key="1" type="ellipsis" />
        ]}
      >
        NavBar
      </NavBar>

      <NavBar
        mode="light"
        leftContent="Back"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
          <Icon key="1" type="ellipsis" />
        ]}
      >
        NavBar
      </NavBar>
    </div>
  );
}

export default Nav;
