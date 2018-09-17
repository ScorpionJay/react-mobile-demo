/**
 *Audio
 */

import React from "react";

class Audio extends React.Component {
  onTimeupdate = () => {
    this.props.musicCurrentTimeAction(this.audio.currentTime,this.audio.duration|0);
  };

  componentDidUpdate() {
    const { status, dispatch, currentTime=0 } = this.props;

    if( this.props.status == 'pause' ){
      this.audio.currentTime = currentTime
    }
    

    switch (this.props.status) {
      case "play":
        if (this.props.src === "") return;
        this.audio.play();
        break;
      case "pause":
        this.audio.pause();
        break;
    }
  }

  render() {
    return (
      <audio
        src={this.props.src || ''}
        ref={el => (this.audio = el)}
        onTimeUpdate={this.onTimeupdate}
        // controls
      />
    );
  }
}

export default Audio;
