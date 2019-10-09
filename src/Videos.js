
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
      isOpen: false,
      videoId: null
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal (videoId) {
    this.setState({isOpen: true, videoId})
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
          videoId={this.state.videoId}
          onClose={() => this.setState({
            isOpen: false,
            videoId: null
          })}
        />
        <button onClick={() => this.openModal('icS__xweWnU')}>Open1</button>
        <button onClick={() => this.openModal('wFMz-AZjaBI')}>Open2</button>
        <button onClick={() => this.openModal('n5uz7egB9tA')}>Open3</button>
      </div>
    )
  }
}



export default Videos;
