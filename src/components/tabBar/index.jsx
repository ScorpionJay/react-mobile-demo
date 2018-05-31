/**
 * 底部导航栏
 */
import React from 'react';
import { NavLink } from "react-router-dom";
import './style'

const TabBar = () => (
    <div className="tabBar">
        <NavLink exact to="/">首页</NavLink>
        <NavLink to="/my">发现</NavLink>
        <NavLink to="/me">我的</NavLink>
    </div>
)

export default TabBar