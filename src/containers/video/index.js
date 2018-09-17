import React, { Component } from "react";
import Nav from "@Components/Nav";
import Video from "@Components/Video";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  BigPlayButton,
  VolumeMenuButton
} from "video-react";
import "./style.scss";

class VidowContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        },
        {
          comment: "hello world"
        }
      ]
    };
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="video">
        <Nav name="视频" left="back" goBack={this.props.history.goBack} />
        <Video
          poster="https://video-react.js.org/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
        <div className="comments">
          {comments &&
            comments.map((item, index) => (
              <div key={index}>{item.comment}</div>
            ))}
        </div>
        <div className="comment">commnet</div>
      </div>
    );
  }
}

export default VidowContainers;
