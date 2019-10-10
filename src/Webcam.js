import React from 'react';

function Webcam(props) {
  return (
    <video autoPlay muted src={props.src} />
  )
}

export default Webcam