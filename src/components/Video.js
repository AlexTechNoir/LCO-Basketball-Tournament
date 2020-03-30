import React from 'react'
import { DivVideo } from '../styles'

export default function Video({ videoRef, scroll }) {
  return (
    <DivVideo ref={videoRef}>
      <div>
        <iframe src="https://www.youtube.com/embed/hqvGOPB0KmQ" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" title="YouTube video" allowFullScreen></iframe>
      </div>
      <div id="video" onClick={scroll}>        
        <i className="fas fa-chevron-down"></i>
      </div>
    </DivVideo>
  )
}
