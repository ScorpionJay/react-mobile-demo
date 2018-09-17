/**
 *Nav
 */

import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

class Nav extends React.Component {
  render () {
    return (
        <NavBar mode='light' 
            icon={<Icon type="left" />} 
            onLeftClick={() => this.props.goBack()}
        >
        排行
        </NavBar>
    )
  }
}

export default Nav
