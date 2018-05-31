/**
 * 列表上拉下拉刷新
 */

import React from "react";
import ReactDOM from "react-dom";
import { PullToRefresh, ListView, Button, NavBar, Icon } from "antd-mobile";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { listAction, listMoreAction } from "../actions/ListViewRefreshAction";

class List extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false
    };
  }

  //If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource !== this.props.dataSource) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
        refreshing: false,
        isLoading: false
      });
    }
  }

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
    this.setState({ refreshing: true, isLoading: true, height: hei });
    this.props.listAction();
  }

  // componentDidUpdate(){

  // }

  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    this.props.listAction();
  };

  onEndReached = event => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    // if (this.state.isLoading && !this.state.hasMore) {
    //   return;
    // }
    console.log("reach end", event);
    this.setState({ isLoading: true });
    this.props.listMoreAction();
  };

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: "#F5F5F9",
          height: 8,
          borderTop: "1px solid #ECECED",
          borderBottom: "1px solid #ECECED"
        }}
      />
    );
    const row = (rowData, sectionID, rowID) => {
      let { img, title, des } = rowData;
      return (
        <div
          key={rowID}
          style={{
            padding: "0 0px",
            backgroundColor: "white"
          }}
        >
          <div
            style={{
              height: "50px",
              lineHeight: "50px",
              color: "#888",
              fontSize: "18px",
              borderBottom: "1px solid #ddd"
            }}
          >
            {title}
          </div>
          <div
            style={{ display: "-webkit-box", display: "flex", padding: "0px" }}
          >
            <img
              style={{ height: "63px", width: "63px", marginRight: "15px" }}
              src={img}
              alt=""
            />
            <div style={{ display: "inline-block" }}>
              <div
                style={{
                  marginBottom: "8px",
                  color: "#000",
                  fontSize: "16px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "250px"
                }}
              >
                {des}
              </div>
              <div style={{ fontSize: "16px" }}>
                <span style={{ fontSize: "30px", color: "#FF6E27" }}>
                  {rowID}
                </span>{" "}
                元/任务
              </div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >
          可刷新列表页
        </NavBar>

        <Button
          inline
          onClick={() =>
            this.setState({ useBodyScroll: !this.state.useBodyScroll })
          }
        >
          {this.state.useBodyScroll ? "useBodyScroll" : "partial scroll"}
        </Button>
        <ListView
          key={this.state.useBodyScroll ? "0" : "1"}
          ref={el => (this.lv = el)}
          dataSource={this.state.dataSource}
          // renderHeader={() => <span>Pull to refresh</span>}
          renderFooter={() => (
            <div style={{ padding: 30, textAlign: "center" }}>
              {this.state.isLoading ? "加载中..." : "上拉获取更多"}
            </div>
          )}
          renderRow={row}
          renderSeparator={separator}
          useBodyScroll={this.state.useBodyScroll}
          style={
            this.state.useBodyScroll
              ? {}
              : {
                  height: this.state.height,
                  border: "1px solid #ddd",
                  margin: "5px 0"
                }
          }
          pullToRefresh={
            <PullToRefresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          onEndReached={this.onEndReached}
          pageSize={5}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataSource: state.ListViewRefreshReducer.data
});

const mapDispatchToPros = dispatch => ({
  listAction: bindActionCreators(listAction, dispatch),
  listMoreAction: bindActionCreators(listMoreAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToPros)(List);
