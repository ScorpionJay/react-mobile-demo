/**
 * 发现模块
 */
import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Button, WhiteSpace, WingBlank, NavBar, Icon } from "antd-mobile";
import Nav from '../../components/Nav'
import TabBar from "../../components/tabBar";
import Carousel from "../../components/carousel";
import Beat from "../../components/Beat";
import Menu from "./component/menu";

import { getBannerAction } from "./action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "discover"
    };
  }

  componentDidMount() {
    const { getBannerAction } = this.props;
    getBannerAction();
  }

  render() {
    const { banner } = this.props;

    

    return (
      <div className="container">
        <div className="navBar">
          <Nav
            rightContent={<Beat key="0" beat={this.props.status} />}
            name='首页'
          />
        </div>
        <div className="content">
          <Carousel data={banner} />

          <Menu />
          {/* <h2>Mobile</h2>
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
          <div>
            <Link to="rank">音乐排行榜</Link>
          </div> */}
        </div>
        <TabBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataSource: state.RankReducer.list,
  status: state.MusicReducer.status,
  banner: state.BannerReducer.data
});

const mapDispatchToPros = dispatch => ({
  getBannerAction: bindActionCreators(getBannerAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Discover);
