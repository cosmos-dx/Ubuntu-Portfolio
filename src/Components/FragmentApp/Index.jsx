import React, { useState, useEffect } from "react";
import SearchIcon from "../../assets/images/search-con.svg";
import Fragment from "../Fragment/Index";
import Auda from "../../assets/images/audacity-icon.png";
import Bluetooth from "../../assets/images/bluetooth-icon.png";
import Calci from "../../assets/images/calculator.png";
import Calender from "../../assets/images/calender-icon.png";
import Desktop from "../../assets/images/desktopfolder.png";
import File from "../../assets/images/fileexplorer.png";
import Solitare from "../../assets/images/solitaire-icon.jpg";
import FireFox from "../../assets/images/firefox.png";
import Github from "../../assets/images/github.png";
import Linkedin from "../../assets/images/linkedin.png";
import Libre from "../../assets/images/libreicon.svg";
import MediTrade from "../../assets/images/medi-trade-icon.svg";
import NearMed from "../../assets/images/icon_nearmed.svg";
import Terminal from "../../assets/images/Terminal.png";
import FileText from "../../assets/images/textFile.png";

function Index({
  setisOtherFragmentOpen,
  isOtherFragmentOpen,
  isFragmentOpen,
  setIsFragmentOpen,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [whichone, setwhicone] = useState("");
  const allItems = [
    { icon: Auda, name: "Audacity" },
    { icon: Bluetooth, name: "Bluetooth" },
    { icon: Calci, name: "Calculator" },
    { icon: Calender, name: "Calendar" },
    { icon: Desktop, name: "Desktop Folder" },
    { icon: File, name: "File Explorer" },
    { icon: Solitare, name: "Solitaire" },
    { icon: FireFox, name: "Firefox" },
    { icon: Github, name: "Github" },
    { icon: Linkedin, name: "Linkedin" },
    { icon: Libre, name: "Libre" },
    { icon: MediTrade, name: "MediTrade" },
    { icon: NearMed, name: "NearMed" },
    { icon: Terminal, name: "Terminal" },
    { icon: FileText, name: ".close" },
    { icon: FileText, name: ".home" },
    { icon: FileText, name: "hello.txt" },
  ];
  const onClickable = (idf) => {
    if(idf === "Github"){
        window.location.href = `https://github.com/cosmos-dx`;
    }
    else if (idf === "Calculator"){
        window.location.href = `https://www.online-calculator.com/`;
    }
    else if (idf === "Calendar"){
        window.location.href = `https://www.timeanddate.com/calendar/`;
    }
    else if (idf === "Linkedin"){
        window.location.href = `https://www.linkedin.com/in/abhishek-gupta-a1a44a203/`;
    }
    else if (idf === "MediTrade"){
        window.location.href = `http://meditradesoft.in/`;
    }
    else if (idf === "NearMed"){
        window.location.href = `https://nearmed.onrender.com/`;
    }
    else if (idf === "Terminal"){
        setwhicone("terminal");
        setIsFragmentOpen(true);
    }
    else if (idf === "Libre"){
        setwhicone("libre");
        setIsFragmentOpen(true);
    }
    else if (idf === "File Explorer"){
        setwhicone("filexp");
        setIsFragmentOpen(true);
    }
    else if (idf === "Firefox"){
        setwhicone("firefox");
        setIsFragmentOpen(true);
    }
    else {
        setisOtherFragmentOpen(false);
    }
  }
  console.log(whichone);
  useEffect(() => {
    const normalizedQuery = searchQuery.toLowerCase();
    const filtered = allItems.filter((item) =>
      item.name.toLowerCase().includes(normalizedQuery)
    );
    setFilteredItems(filtered);
  }, [searchQuery]);

  return (
    <div className="fragment-container">
      <div className="blur-background-frag2">
        <div className="searchbar-frag2">
          <div className="search-icon">
            <img src={SearchIcon} alt="" />
          </div>
          <input
            type="text"
            placeholder="Type to search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="items-frag2">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="items-conatiner-2"
              onClick={() => onClickable(item.name)}
            >
              <img src={item.icon} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      {(isFragmentOpen && (whichone === "terminal" || whichone === "libre" || whichone === "filexp" || whichone === "firefox" )) ? (
        <Fragment
            setIsFragmentOpen={setIsFragmentOpen}
            isFragmentOpen={isFragmentOpen}
            whichfrag={whichone}
        />
    ) : null}

    </div>
    
  );
}

export default Index;
