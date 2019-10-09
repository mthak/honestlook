
import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import '../node_modules/react-modal-video/css/modal-video.min.css';

/*
  一度に１個の動画を再生する
   ステート保持する
     今どの動画を再生しているか
*/


class Videos extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }


  render () {
    return (

      <div style={{
        'display': 'flex',
        'justifyContent': 'space-evenly',
        'padding': '30px'
      }}>
        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => this.setState({
            isOpen: false,
            videoId: null
          })}
        />
        <button onClick={this.openModal}>Open</button>
      </div>
    )
  }
}



export default Videos;
