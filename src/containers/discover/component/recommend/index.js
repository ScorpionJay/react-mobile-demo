import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style";
import { Item } from "antd-mobile/lib/tab-bar";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = [
      {
        img: "http://jay.aliyuntao.top/51.jpg",
        title: "See U again"
      },
      {
        img: "http://jay.aliyuntao.top/52.jpg",
        title: "See U again"
      },
      {
        img: "http://jay.aliyuntao.top/57.jpg",
        title: "See U again"
      },
      {
        img: "http://jay.aliyuntao.top/60.jpg",
        title: "See U again"
      },
      {
        img: "http://jay.aliyuntao.top/47.jpg",
        title: "See U again"
      },
      {
        img: "http://jay.aliyuntao.top/27.jpg",
        title: "See U again"
      }
    ];

    return (
      <div className="recommend">
        {data.map((item, index) => (
          <div key={index} className='item'>
            <div style={{backgroundImage:`url(${item.img})`}} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    );
  }
}
