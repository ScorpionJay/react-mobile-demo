/**
 * rank
 */

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getListAction } from "./action";

import List from "./component/List";
// import Nav from './component/Nav'
import Nav from "../../components/Nav";
import NoData from "./component/NoData";
import Beat from "../../components/Beat";
class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getListAction({
      page: 0,
      pageSize: this.props.data.pageSize
    });
  }

  render() {
    return (
      <div>
        <Nav
          name="排行"
          left="back"
          goBack={this.props.history.goBack}
          rightContent={<Beat key="0" beat={this.props.status} />}
        />
        {this.props.dataSource.length > 0 ? (
          <List {...this.props} />
        ) : (
          <NoData text={"暂无数据"} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataSource: state.RankReducer.list,
  data: state.RankReducer,
  status: state.MusicReducer.status
});

const mapDispatchToPros = dispatch => ({
  getListAction: bindActionCreators(getListAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Rank);
