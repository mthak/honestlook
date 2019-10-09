
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
        <VideostartButton
          videoId="n5uz7egB9tA"
          openModal={this.openModal}
        />
        <VideostartButton
          videoId="icS__xweWnU"
          openModal={this.openModal}
        />
        <VideostartButton
          videoId="wFMz-AZjaBI"
          openModal={this.openModal}
        />

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

function VideostartButton(props) {
  const thumnailUrl = 'https://img.youtube.com/vi/' + props.videoId + '/0.jpg'
  
  return (
    
    <button
      style={{
        width: '30%',
        cursor: 'pointer',
      }}
      onClick={() => props.openModal(props.videoId)}>
      <img
        style={{
          width: '100%'
        }}            
        src={thumnailUrl}
        alt="Snow" />
    </button>
  )
}


export default Videos;
