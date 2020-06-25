import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './13568-animated-loader.json'

class LogoTimeline extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>

        <Lottie options={defaultOptions}
              height={150}
              width={150}
        />
      </div>
    )
  }
}

export default LogoTimeline;