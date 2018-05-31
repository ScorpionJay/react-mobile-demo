import React, { Component } from "react";
import { Carousel, WingBlank } from "antd-mobile";

class CarouselComponent extends Component {
  render() {

    const {data=[]} = this.props;

    return(
    <Carousel
      className="space-carousel"
      // frameOverflow="visible"
      // cellSpacing={10}
      // slideWidth={0.8}
      autoplay
      infinite
      // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      // afterChange={index => this.setState({ slideIndex: index })}
    >
      {data.map((item, index) => (
        <a
          key={index}
          href="http://www.alipay.com"
          style={{
            display: "block",
            position: "relative",
            // top: this.state.slideIndex === index ? -10 : 0,
            height: '4rem',//this.state.imgHeight,
            // boxShadow: "2px 1px 1px rgba(0, 0, 0, 0.2)"
          }}
        >
          <img
            src={item.img}
            alt=""
            style={{ width: "100%", verticalAlign: "top",height: '4rem' }}
            // onLoad={() => {
            //   // fire window resize event to change height
            //   window.dispatchEvent(new Event("resize"));
            //   this.setState({ imgHeight: "auto" });
            // }}
          />
        </a>
      ))}
    </Carousel>
    )}
}

export default CarouselComponent;
