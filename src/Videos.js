
import React from 'react'
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import { captureUserMedia, S3Upload } from './AppUtils';
import Webcam from './Webcam';
import RecordRTC from 'recordrtc';


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



const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia);


class Videos extends React.Component {

  constructor () {
    super()
    this.state = {
      // For Playing a video
      isOpen: false,
      videoId: null,

      // For Recording a webcam
      recordVideo: null,
      src: null,
      uploadSuccess: null,
      uploading: false
    }

    // For Playing a video
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this);
    this.startVideo = this.startVideo.bind(this)
    this.endVideo = this.endVideo.bind(this)

    // For Recording a webcam
    this.requestUserMedia = this.requestUserMedia.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
  }

  // For Playing a video
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
    this.startRecord()
  }

  endVideo() {
    console.log('endVideo')
    this.stopRecord()
  }

  // For Recording a webcam
  componentDidMount() {
    if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
  }

  requestUserMedia() {
    console.log('requestUserMedia')
    captureUserMedia((stream) => {

      var binaryData = [];
      binaryData.push(stream);
      // TODO Set correct Blob type
      const src = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))

      this.setState({ src });
      console.log('setting state', this.state)
    });
  }


  startRecord() {
    captureUserMedia((stream) => {
      this.state.recordVideo = RecordRTC(stream, { type: 'gif' });
      this.state.recordVideo.startRecording();
    });

  }

  stopRecord() {
    this.state.recordVideo.stopRecording(() => {
      // TODO Delete this line that is for debug
      this.state.recordVideo.save('./video.webm');

      let params = {
        type: 'video/webm',
        data: this.state.recordVideo.blob,
        id: Math.floor(Math.random()*90000) + 10000
      }

      this.setState({ uploading: true });

      S3Upload(params)
      
      // TODO Send Request to S3
      // S3Upload(params)
      // .then((success) => {
      //   console.log('enter then statement')
      //   if(success) {
      //     console.log(success)
      //     this.setState({ uploadSuccess: true, uploading: false });
      //   }
      // }, (error) => {
      //   alert(error, 'error occurred. check your aws settings and try again.')
      // })
    });
  }



  render () {
    return (
      <div>
        {/* <div>{this.state.uploadSuccess ? 'Success' : 'Not Success'}</div>
        {this.state.uploading
          ? <div>Uploading...</div>
          : null
        } */}
        <div>
          <Webcam src={this.state.src}/>
        </div>

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
        </div>


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


// key id: value: title
const videoIdAndTitle = {
  'n5uz7egB9tA': '',
  'icS__xweWnU': '',
  'wFMz-AZjaBI': '',
}

function getVideoTitle(id) {
  return videoIdAndTitle[id]
}

export default Videos;
