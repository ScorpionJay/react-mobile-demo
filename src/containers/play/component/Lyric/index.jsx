import React, { Component } from "react";
import "./style";
class Lyric extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // krcHeight: 0,
      // krcItem: 0
    };
  }

  componentDidMount() {
    this.setState({
      containerHeight: this.container.getBoundingClientRect().height / 2,
      itemHeight: this.container.children[0].getBoundingClientRect().height
    });
  }

  render() {
    const {
      lyric,
      currentLyric: { index = 0 }
    } = this.props;
    const { containerHeight, itemHeight } = this.state;
    return (
      <div className="lyric" ref={el => (this.container = el)}>
        {lyric.map(item => (
          <div
            key={item.time}
            style={Object.assign(
              {
                transform:
                  "translateY(" +
                  (containerHeight - index * itemHeight - itemHeight/2) +
                  "px)",
                transition: "transform .5s ease",
                padding: ".3rem 0",
                // height:'2rem'
              },
              index === item.index ? { color: "red" } : {}
            )}
          >
            {item.content}
          </div>
        ))}
      </div>
    );
  }
}

export default Lyric;
