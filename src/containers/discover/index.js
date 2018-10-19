/**
 * 发现模块
 */
import React, { Component } from "react";
import Nav from "../../components/Nav";
import TabBar from "../../components/tabBar";
import Carousel from "../../components/carousel";
import Beat from "../../components/Beat";
import Menu from "./component/menu";
import Recommend from "./component/recommend";

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
            name="首页"
          />
        </div>
        <div className="content">
          <Carousel data={banner} />
          <Menu />
          <Recommend />
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
