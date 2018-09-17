import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

class SliderComponent extends Component {

  constructor(props) {
    super(props);
    const { duration,currentTime } = this.props
    this.state = {
     slider: duration ? currentTime / duration *100 : 0  ,
     playList:false,
   };
  }

  componentWillReceiveProps(){
    const { duration,currentTime } = this.props
    this.setState({
      slider: duration === 0 ? 0 : currentTime / duration *100
    })
  }

  formatSeconds(value) { 
    var theTime = parseInt(value | 0);// 秒 
    var theTime1 = 0;// 分 
    var theTime2 = 0;// 小时 
    // alert(theTime); 
    if(theTime >= 60) { 
    theTime1 = parseInt(theTime/60); 
    theTime = parseInt(theTime%60); 
    // alert(theTime1+"-"+theTime); 
    if(theTime1 > 60) { 
    theTime2 = parseInt(theTime1/60); 
    theTime1 = parseInt(theTime1%60); 
    } 
    } 
    var result = parseInt(theTime); 
    result = (result >= 10  ) ? ""+parseInt(theTime) : "0"+parseInt(theTime); 
    if(theTime1 > 0) { 
      var m = parseInt(theTime1)
      m = m >= 10  ? ""+m : "0"+m; 
      result = ""+m+":"+result; 
    }else{
       result = '00:'+ result
    } 

    if(theTime2 > 0) { 
    result = ""+parseInt(theTime2)+":"+result; 
    } 

    return result; 
  } 

  render() {
    const {currentTime,duration} = this.props
    console.log(currentTime,duration)
    return (

      <div style={{display:'flex',height:'1rem'}}>
        <div style={{padding:'0 .5rem',color:'#333'}}> {this.formatSeconds(currentTime)} </div>
        <div style={{display:'flex',flex:1}}>
          <Slider 
            onChange={value=>this.props.musicCurrentTimeAction(value/100*duration,duration)}  
            step={0.1} 
            value={ this.state.slider}  
            onBeforeChange={()=>this.props.musicPauseAction()} 
            onAfterChange={()=>this.props.musicPlayAction()} 
          />
        </div>
        <div style={{padding:'0 .5rem',color:'#333'}}> {this.formatSeconds(duration)} </div> 
      </div>

        // <Slider 
        //     // onChange={(value)=>this.changeSlider(value)}  
        //     step={0.1} 
        //     value={ value }  
        //     //onBeforeChange={()=>this.musicControll('pause')}
        //     //onAfterChange={()=>this.musicControll('play')} 
        // />
    )
  }
}


export default SliderComponent