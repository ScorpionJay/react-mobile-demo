/**
 *Nav
 */

import React from "react";
import { NavBar, Icon } from "antd-mobile";
import "./style";

class Nav extends React.Component {
  render() {
    return (
      <NavBar
        // mode="light"
        // prefixCls="test"
        icon={this.props.left && <Icon type="left" />}
        onLeftClick={() => this.props.goBack()}
        rightContent={[this.props.rightContent]}
      >
        {this.props.name}
      </NavBar>
    );
  }
}

export default Nav;
