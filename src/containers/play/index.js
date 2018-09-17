/**
 * play
 */

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getLyricAction,
  musicPlayAction,
  musicCurrentAction,
  musicPauseAction,
  musicCurrentTimeAction
} from "../../actions/MusicAction";
import { PlayBtn, StopBtn, ListBtn, PreBtn, NextBtn } from "./component/Btn";
import Nav from "../../components/Nav";
import Lyric from "./component/Lyric";
import Slider from "./component/Slider";

import "./style";

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getLyricAction({ id });
    this.props.musicCurrentAction(id);
  }

  // onTimeupdate = () =>{
  //   // console.log(this.audio.currentTime)
  //   this.setState({ currentTime:this.audio.currentTime})
  // }

  render() {
    const { lyric, currentTime, duration, status } = this.props;
    let currentLyric =
      lyric.filter(item => currentTime > item.time).pop() || {};

    return (
      <div className="play">
        <Nav goBack={this.props.history.goBack} name={"歌名"} left="back" />

        <Lyric lyric={lyric} currentLyric={currentLyric} />

        <Slider
          value={duration ? (currentTime / duration) * 100 : 0}
          currentTime={currentTime}
          duration={duration}
          musicCurrentTimeAction={this.props.musicCurrentTimeAction}
          musicPlayAction={this.props.musicPlayAction}
          musicPauseAction={this.props.musicPauseAction}
        />

        <div
          style={{
            display: "flex",
            padding: ".5rem .8rem",
            justifyContent: "space-between"
          }}
        >
          <div>
            <PreBtn />
          </div>
          <div
            onClick={() =>
              status !== "play"
                ? this.props.musicPlayAction()
                : this.props.musicPauseAction()
            }
          >
            {status === "play" ? <StopBtn /> : <PlayBtn />}
          </div>
          <div>
            <NextBtn />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataSource: state.RankReducer.list,
  lyric: state.MusicReducer.lyric,
  currentTime: state.MusicReducer.currentTime,
  duration: state.MusicReducer.duration,
  status: state.MusicReducer.status
});

const mapDispatchToPros = dispatch => ({
  getLyricAction: bindActionCreators(getLyricAction, dispatch),
  musicPlayAction: bindActionCreators(musicPlayAction, dispatch),
  musicPauseAction: bindActionCreators(musicPauseAction, dispatch),
  musicCurrentAction: bindActionCreators(musicCurrentAction, dispatch),
  musicCurrentTimeAction: bindActionCreators(musicCurrentTimeAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Play);
