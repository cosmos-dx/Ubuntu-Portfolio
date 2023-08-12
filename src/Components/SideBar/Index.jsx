import React, { useState } from "react";
import "../../assets/css/mystyles.css";
import firefox from "../../assets/images/firefox.png";
import fileExp from "../../assets/images/fileexplorer.png";
import libreicon from "../../assets/images/libreicon.svg";
import Terminal from "../../assets/images/Terminal.png";
import Software from "../../assets/images/software-center.png";
import PIcon from "../../assets/images/P-icon.png";
import Thunderbird from "../../assets/images/Thunderbird.png";
import ShowAPPs from "../../assets/images/icongridapp.png";
import Fragment from "../Fragment/Index";
import FragmentApp from "../FragmentApp/Index";
function Index() {
  const [isFragmentOpen, setIsFragmentOpen] = useState(false);
  const [isOtherFragmentOpen, setisOtherFragmentOpen] = useState(false);
  const [whichfrag, setwhichfrag] = useState("");
  const handleIconClick = (idf) => {
    if(idf==="showapp"){
        setIsFragmentOpen(false);
        setisOtherFragmentOpen(true);
    }
    else{
    setwhichfrag(idf);
    setIsFragmentOpen(true);
    }
    
  };
  return (
    <div className="sideBar">
      <div className="sidebar-icon-container">
        <div
          className="sidebar-icon"
          onClick={() => handleIconClick("firefox")}
        >
          <img src={firefox} alt="FireFox" />
        </div>
        <div className="sidebar-icon" onClick={() => handleIconClick("filexp")}>
          <img src={fileExp} alt="FileExplorer" />
        </div>
        <div className="sidebar-icon" onClick={() => handleIconClick("libre")}>
          <img src={libreicon} alt="Libre" />
        </div>
        <div
          className="sidebar-icon"
          onClick={() => handleIconClick("terminal")}
        >
          <img src={Terminal} alt="Terminal" />
        </div>
        <div
          className="sidebar-icon"
          onClick={() => handleIconClick("thunderbird")}
        >
          <img src={Thunderbird} alt="Thunderbird" />
        </div>
        <div
          className="sidebar-icon"
          onClick={() => handleIconClick("software")}
        >
          <img src={Software} alt="Software" />
        </div>
        <div
          className="sidebar-icon"
          onClick={() => (window.location.href = "https://profound-dasik-cd267f.netlify.app/")}
        >
          <img src={PIcon} alt="Software" />
        </div>
      </div>
      <div>
        <div
          className="sidebar-icon-bottom"
          onClick={() => handleIconClick("showapp")}
        >
          <img src={ShowAPPs} alt="Icon 1" />
        </div>
      </div>
      {isFragmentOpen && (
        <Fragment
          setIsFragmentOpen={setIsFragmentOpen}
          isFragmentOpen={isFragmentOpen}
          whichfrag={whichfrag}
        />
      )}
      {isOtherFragmentOpen && (
        <FragmentApp
          setisOtherFragmentOpen={setisOtherFragmentOpen}
          isOtherFragmentOpen={isOtherFragmentOpen}
          setIsFragmentOpen={setIsFragmentOpen}
          isFragmentOpen={isFragmentOpen}
        />
      )}
    </div>
  );
}

export default Index;
