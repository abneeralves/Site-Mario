import React from "react";
import './Fundo.css'
import video from '../../../public/background-video.mp4'

function fundo() {
  return (
    <div className='background'>
      <video loop autoPlay muted >
          <source src={video} type="video/mp4" />
      </video>
    </div>
  ) 
}

export default fundo