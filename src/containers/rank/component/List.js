import React, { Component } from "react";
import ReactDOM from "react-dom";
import { PullToRefresh, ListView } from "antd-mobile";
import "./list.scss";
class ListComponent extends React.Component {
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
      // useBodyScroll: true,
      hasData: true
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

  componentWillUpdate() {
    // const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
    // this.setState({ height: hei });
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
    this.setState({ height: hei });
    this.props.getListAction({
      page: 0,
      pageSize: this.props.data.pageSize
    });
  }

  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    this.props.getListAction({
      page: 0,
      pageSize: this.props.data.pageSize
    });
  };

  onEndReached = event => {
    // load new data
    console.log("reach end", event);
    console.log(this.props.data);
    const { page, total, pageSize } = this.props.data;
    this.setState({
      isLoading: false,
      hasMore: total >= (page + 1) * pageSize
    });
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading || !this.state.hasMore) {
      return;
    }

    this.setState({ isLoading: true });
    this.props.getListAction({ page: page + 1, pageSize });
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
      let {
        album: { picUrl },
        name,
        artist
      } = rowData;
      rowID = +rowID + 1;
      return (
        <div className="item" onClick={() => this.props.history.push({pathname:`/play/${rowData.id}` })}>
          <div className={`row row${rowID}`}>
            {rowID < 10 ? "0" + rowID : rowID}
          </div>
          <div>
            <div className="name">{name}</div>
            <div className="artist">
              {artist.map(item => item.name).join("、")}
            </div>
          </div>
        </div>
      );
    };
    return (
      <div className="rankList">
        <ListView
          key={this.state.useBodyScroll ? "0" : "1"}
          ref={el => (this.lv = el)}
          dataSource={this.state.dataSource}
          // renderHeader={() => <span>Pull to refresh</span>}
          renderFooter={() => (
            <div style={{ padding: 10, textAlign: "center" }}>
              {this.state.isLoading
                ? "加载中..."
                : this.state.hasMore
                  ? "上拉获取更多"
                  : "没有更多数据啦"}
            </div>
          )}
          renderRow={row}
          renderSeparator={separator}
          useBodyScroll={this.state.useBodyScroll}
          style={{
            height: this.state.height
            // border: "1px solid #ddd",
            // margin: "5px 0"
          }}
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

export default ListComponent;
