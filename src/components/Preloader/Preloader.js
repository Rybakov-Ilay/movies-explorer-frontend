import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
  console.log(props.renderLoading)
  return (
    <div className={`preloader ${props.renderLoading ? "" : "preloader__hidden"}`}>
      <div className="preloader__container">
        <span className="preloader__round"/>
      </div>
    </div>
  )
};

export default Preloader
