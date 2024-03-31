import React,{ useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/Video-Player.mp4'
const VideoPlayer = ({play,setPlay}) => {
    const player = useRef(null)
    const close=(e)=>{
        if(e.target===player.current){
            setPlay(false);
        }
    }
  return (
    <div className={`video-player ${play?'':'hide'}`} ref={player} onClick={close}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
