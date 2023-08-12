import React, { useState } from 'react';
import "../../assets/css/mystyles.css";
import TurnOff from "../../assets/images/turn-off.png";
import Speaker from "../../assets/images/volume-up.png";
import Rhythm from "../../assets/images/rhythm.png";
import Mute from "../../assets/images/mute.png";
import AudioM from "../../assets/mymusic.mp3";
function Index() {
  const [telltime, setTime] = useState(getFormattedTime());
  const [activeIcon, setActiveIcon] = useState("speaker"); 
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(AudioM);
  function getFormattedTime() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  
    const formattedTime = `${day} ${month} ${hours}:${minutes}`;
    return formattedTime;
  }

  const formattedTime = getFormattedTime();

  const handleIconClick = (iconName) => {
    if (iconName === "speaker") {
      setActiveIcon("turnoff");
    } else if (iconName === "turnoff") {
      setActiveIcon("speaker");
    }
  };

  const handleTurnOffClick = () => {
    // Reload the page
    window.location.reload();
  };
  
    
  
const playmusic = () => {
  if (isPlaying) {
    audio.stop();
  } else {
    audio.play();
    setIsPlaying(true);
  }
};

  

  return (
    <nav className='topnav'>
      <div className='topnav-topleft'>Activities</div>
      <div className='topnav-center'>{telltime}</div>
      <div className='topnav-topright'>
      <img src={TurnOff} alt="Turn Off" onClick={handleTurnOffClick} />
        {activeIcon === "turnoff" ? (
          <img src={Mute} alt="Turn Off" onClick={() => handleIconClick("turnoff")} />
        ) : (
          <img src={Speaker} alt="Speaker" onClick={() => handleIconClick("speaker")} />
        )}
        <img src={Rhythm} alt="Rhythm" onClick={playmusic} />
      </div>
    </nav>
  );
}

export default Index;
