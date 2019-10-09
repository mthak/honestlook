
import React from 'react'
import YouTube from 'react-youtube';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Videos extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false,
      videoId: null
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this);
    this.startVideo = this.startVideo.bind(this)
    this.endVideo = this.endVideo.bind(this)
  }

  openModal (videoId) {
    this.setState({isOpen: true, videoId})
    this.startVideo()
  }

  closeModal() {
    this.setState({isOpen: false, videoId: null})
    this.endVideo()
  }

  startVideo() {
    console.log('startVideo')
  }

  endVideo() {
    console.log('endVideo')
  }



  render () {
    return (

      <div style={{
        'display': 'flex',
        'justifyContent': 'space-evenly',
        'padding': '30px'
      }}>
        <button
            style={{
              width: '30%',
              cursor: 'pointer',
            }}
            onClick={() => this.openModal('icS__xweWnU')}>
          <img
            style={{
              width: '100%'
            }}            
            src="https://img.youtube.com/vi/icS__xweWnU/0.jpg" alt="Snow" />
        </button>
        <button
          style={{
            width: '30%',
            cursor: 'pointer',
          }}
          onClick={() => this.openModal('wFMz-AZjaBI')}
        >
          <img
            style={{
              width: '100%'
            }}
            src="https://img.youtube.com/vi/wFMz-AZjaBI/0.jpg" alt="Snow" />
        </button>
        <button
          style={{
            width: '30%',
            cursor: 'pointer',
          }}
          onClick={() => this.openModal('n5uz7egB9tA')}
        >
          <img 
            style={{
              width: '100%'
            }}
            src="https://img.youtube.com/vi/n5uz7egB9tA/0.jpg" alt="Snow" />
        </button>


        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Video"
        >

          <button onClick={this.closeModal}>close</button>
          <YouTube
            videoId={this.state.videoId}
            opts={{
              height: '390',
              width: '640',
              playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
              }
            }}
            onEnd={this.closeModal}
          />
        </Modal>
      </div>
    )
  }
}


export default Videos;
