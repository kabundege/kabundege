import React,{ useRef,useState,useEffect } from 'react';
import track from '../../assets/cute.mp3';

const Player = () => {
    const [ muted,setMuted ] = useState(false)
    const [playing, setPlayer ] = useState("initial state")
    const audioRef = useRef();
    useEffect(()=> { 
        if(playing === true){
            audioRef.current.play()
            setPlayer("final state")
        }
        audioRef.current.muted = muted;
        audioRef.current.volume = 0.3
     },[muted,playing]);
    return(
        <div className="player">
            {   playing !== 'initial state' ?
                muted ?
                <i onClick={()=>setMuted(false)} className="fas fa-volume-up"></i>  :
                <i onClick={()=>setMuted(true)} className="fas fa-volume-mute"></i> :
                <i onClick={()=>setPlayer(true)} className="fas fa-guitar"></i>
            }
            <audio src={track} ref={audioRef} loop/>
        </div>
    )
}

export default Player;
