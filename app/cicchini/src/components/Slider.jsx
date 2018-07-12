import React from 'react'
import SlickSlider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Slider = props => {
  return (
    <SlickSlider
      prevArrow={<ArrowPrev />}
      nextArrow={<ArrowNext />}
      {...props}
    >
      {props.children}
    </SlickSlider>
  )
}
const ArrowPrev = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 99, left: 25 }}
      onClick={onClick}
    />
  )
}

const ArrowNext = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 99, right: 25 }}
      onClick={onClick}
    />
  )
}

export default Slider

