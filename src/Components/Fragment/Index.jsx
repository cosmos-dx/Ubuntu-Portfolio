import React, { useState, useEffect, useRef, Fragment } from "react";
import { Terminal } from "primereact/terminal";
import { TerminalService } from "primereact/terminalservice";
import emailjs from "@emailjs/browser";
import "../../assets/css/mystyles.css";
import firefox from "../../assets/images/firefox.png";
import filexp from "../../assets/images/fileexplorer.png";
import libre from "../../assets/images/libreicon.svg";
import terminal from "../../assets/images/Terminal.png";
import thunderbird from "../../assets/images/Thunderbird.png";
import software from "../../assets/images/software-center.png";
import MediTrade from "../../assets/images/medi-trade.png";
import MediTradeIcon from "../../assets/images/medi-trade-icon.svg";
import NearMed from "../../assets/images/nearmed.png";
import NearMedIcon from "../../assets/images/icon_nearmed.svg";
import Alone from "../../assets/images/alone.png";

import Recent from "../../assets/images/recent-icon.svg";
import Document from "../../assets/images/documents-icon.svg";
import Download from "../../assets/images/download-icon.svg";
import Home from "../../assets/images/home.svg";
import Desktop from "../../assets/images/desktop-icon.svg";
import Music from "../../assets/images/music.svg";
import Pictures from "../../assets/images/pictures.svg";
import Starred from "../../assets/images/starred.svg";
import Trash from "../../assets/images/trash.svg";
import Videos from "../../assets/images/videos.svg";
// Folders
import Folder from "../../assets/images/folder.png";
import DocumentFolder from "../../assets/images/documentfolder.png";
import Skills from "../../assets/images/skills-my.svg";
import MusicFolder from "../../assets/images/musicfolder.png";
import DownloadFolder from "../../assets/images/downloadfolder.png";
import FolderDesktop from "../../assets/images/desktopfolder.png";
import VideoFolder from "../../assets/images/videofolder.png";
import Linkedin from "../../assets/images/linkedin.png";
import Qualification from "../../assets/images/qualification-my.svg";
import Github from "../../assets/images/github.png";
import GFG from "../../assets/images/gfg.png";
import FileImage from "../../assets/images/textFile.png";
import Resume from "../../assets/images/Resume.pdf";
import ALoneIco  from "../../assets/images/alone-icon.png";
import AudioM from "../../assets/mymusic.mp3";
function Index({ setIsFragmentOpen, whichfrag }) {
  console.log("coming from other frag -- ", whichfrag);
  const [isPlaying, setIsPlaying] = useState(false);
 
  const audio = new Audio(AudioM);
  const form = useRef();
  const onClickMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      setTimeout(() => {
        audio.play();
      }, 100);
    }
    setIsPlaying(!isPlaying);
  };

  const onCloseTopFrag = () => {
    setIsFragmentOpen(false);
  };
  const downloadFile = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailValue = form.current.email.value;
    const projectValue = form.current.project.value;

    if (!emailValue || !projectValue) {
      alert("Email and Project cannot be empty.");
      return;
    }

    emailjs
      .sendForm(
        "service_1fgl923",
        "template_9l0xf0u",
        form.current,
        "ORZW_JztdapHLXOMZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const commandHandler = (text) => {
    let response;
    let argsIndex = text.indexOf(" ");
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
      case "sudo":
        response = "enter password";
        break;
      case "projects":
        response = "MediTrade NearMed Alone";
        break;
      case "skills":
        response = "HTML CSS JS REACT NODEJS C/C++ MONGODB SQL ";
        break;
      case "help":
        response = "projects skills date greet random clear";
        break;
      case "date":
        response = "Today is " + new Date().toDateString();
        break;

      case "greet":
        response = "Hola " + text.substring(argsIndex + 1) + "!";
        break;

      case "random":
        response = Math.floor(Math.random() * 100);
        break;

      case "clear":
        response = null;
        break;

      default:
        response = "Unknown command: " + command;
        break;
    }

    if (response) {
      TerminalService.emit("response", response);
    } else {
      TerminalService.emit("clear");
    }
  };
  useEffect(() => {
    TerminalService.on("command", commandHandler);

    return () => {
      TerminalService.off("command", commandHandler);
    };
  }, []);
  const getrelatedicons = () => {
    if (whichfrag === "firefox") {
      return (
        <div className="img-wrapper">
          <img src={firefox} alt="" className="fit-img" />
        </div>
      );
    } else if (whichfrag === "filexp") {
      return (
        <div className="img-wrapper">
          <img src={filexp} alt="" className="fit-img" />
        </div>
      );
    } else if (whichfrag === "libre") {
      return (
        <div className="img-wrapper">
          <img src={libre} alt="" className="fit-img" />
        </div>
      );
    } else if (whichfrag === "terminal") {
      return (
        <div className="img-wrapper">
          <img src={terminal} alt="" className="fit-img" />
        </div>
      );
    } else if (whichfrag === "thunderbird") {
      return (
        <div className="img-wrapper">
          <img src={thunderbird} alt="" className="fit-img" />
        </div>
      );
    } else if (whichfrag === "software") {
      return (
        <div className="img-wrapper">
          <img src={software} alt="" className="fit-img" />
        </div>
      );
    }
  };
  const getrelatedcontents = () => {
    if (whichfrag === "firefox") {
      return (
        <iframe
          className="ifrme"
          src="https://www.google.com/"
        ></iframe>
      );
    } else if (whichfrag === "filexp") {
      return (
        <div className="filexpcontainer">
          <div className="FileLeft-section">
            <p></p>
            <div className="FileLeft-section-items">
              <img src={Recent} alt="" />
              <p>Recent</p>
            </div>
            <div className="FileLeft-section-items">
              <img src={Starred} alt="" />
              <p>Starred</p>
            </div>
            <div className="FileLeft-section-items active">
              <img src={Home} alt="" />
              <p>Home</p>
            </div>
            <div className="FileLeft-section-items" onClick={onCloseTopFrag}>
              <img src={Desktop} alt="" />
              <p>Desktop</p>
            </div>
            <div className="FileLeft-section-items">
              <img src={Document} alt="" />
              <p>Documents</p>
            </div>
            <div className="FileLeft-section-items">
              <img src={Download} alt="" />
              <p>Downloads</p>
            </div>
            <div className="FileLeft-section-items" onClick={onClickMusic} >
              <img src={Music} alt="" />
              <p>Music</p>
            </div>
            <div className="FileLeft-section-items">
              <img src={Pictures} alt="" />
              <p>Pictures</p>
            </div>
            <div className="FileLeft-section-items">
              <img src={Videos} alt="" />
              <p>Videos</p>
            </div>
            <div className="FileLeft-section-items">
              <img src={Trash} alt="" />
              <p>Trash</p>
            </div>
          </div>
          <div className="Separator"></div>
          <div className="FileRight-section">
            <div className="Row1">
              <div className="fileright-section-folderinfo">
                <img src={FolderDesktop} alt="Folder 1" />
                <p>Desktop</p>
              </div>
              <div className="fileright-section-folderinfo">
                <img src={DocumentFolder} alt="Folder 2" />
                <p>Documents</p>
              </div>
              <div className="fileright-section-folderinfo">
                <img src={DownloadFolder} alt="Folder 2" />
                <p>Downloads</p>
              </div>
              <div
                className="fileright-section-folderinfo"
                onClick={onClickMusic}
              >
                <img src={MusicFolder} alt="Folder 2" />
                <p>Music</p>
              </div>
              <div className="fileright-section-folderinfo">
                <img src={VideoFolder} alt="Folder 2" />
                <p>Videos</p>
              </div>
            </div>
            <div className="Row2">
              <div
                className="fileright-section-folderinfo"
                onClick={() => downloadFile(Resume)}
              >
                <img src={Folder} alt="Folder 2" />
                <p>Resume</p>
              </div>

              <div
                className="fileright-section-folderinfo"
                onClick={() =>
                  (window.location.href =
                    "https://profound-dasik-cd267f.netlify.app/")
                }
              >
                <img src={Folder} alt="Folder 2" />
                <p>Portfolio</p>
              </div>

              <div
                className="fileright-section-folderinfo"
                onClick={() =>
                  (window.location.href =
                    "https://profound-dasik-cd267f.netlify.app/#skills")
                }
              >
                <img src={Folder} alt="Folder 2" />
                <p>Skills</p>
              </div>
              <div
                className="fileright-section-folderinfo"
                onClick={() =>
                  (window.location.href =
                    "https://profound-dasik-cd267f.netlify.app/#qualification")
                }
              >
                <img src={Folder} alt="Folder 2" />
                <p>Qualifications</p>
              </div>
              <div className="fileright-section-folderinfo">
                <img src={Folder} alt="Folder 2" />
                <p>Scripts</p>
              </div>
            </div>
            <div className="Row3">
              <div className="fileright-section-folderinfo">
                <img src={FileImage} alt="Folder 2" />
                <p>.bin</p>
              </div>
              <div className="fileright-section-folderinfo">
                <img src={FileImage} alt="Folder 2" />
                <p>.bash</p>
              </div>
              <div className="fileright-section-folderinfo">
                <img src={FileImage} alt="Folder 2" />
                <p>hello.txt</p>
              </div>
              <div className="fileright-section-folderinfo">
              </div>
              <div className="fileright-section-folderinfo">
              </div>
            </div>
          </div>
        </div>
      );
    } else if (whichfrag === "libre") {
      return (
        <div className="Project-cards-scrollable">
          <div className="Projects">Projects</div>
          <div className="Project-cards">
            <div className="Project-card">
              <div className="Left-section">
                <div className="Project-namewithicon">
                  <img src={MediTradeIcon} alt="" />
                  <div className="Project-Name">MediTrade</div>
                </div>
                <a
                  href="http://meditradesoft.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={MediTrade} alt="Project" />
                </a>
                <div className="Description">
                  A Helpful Product for Medical Shop Owners.{" "}
                </div>
                <br />
                <p>
                  MediTrade is a GST based Inventory which helps to manage all
                  data (products, Supplier, Customer, etc). Its helpful to
                  manage GST3 taxation summaries.
                </p>
                <ul>
                  <li>Better Inventory Management</li>
                  <li>GST3 Taxation Feature</li>
                  <li>Descent UI</li>
                  <li>GST based Registration</li>
                  <li>Better DB handling</li>
                </ul>
                <p>
                  You can visit git repository{" "}
                  <a
                    href="https://github.com/cosmos-dx/MediTrade"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
              <hr className="colored-hr" />
              <div className="Right-section">
                <div className="Information">Tech Stack</div>
                <h5>FrontEnd</h5>
                <ul>
                  <li>
                    <p>MediTrade Uses React as its FrontEnd.</p>
                  </li>
                  <li>
                    <p>
                      There is a middleware which is responsible for the
                      accurate calculations.
                    </p>
                  </li>
                  <li>
                    <p>Proper usage of React Hooks are provided.</p>
                  </li>
                  <li>
                    <p>
                      You can visit git repository for FrontEnd{" "}
                      <a
                        href="https://github.com/cosmos-dx/MediTrade-frontEnd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                  </li>
                </ul>
                <h5>BackEnd</h5>
                <ul>
                  <li>
                    <p>
                      MediTrade Backend is written in NodeJS and it uses Express
                      FrameWork.
                    </p>
                  </li>
                  <li>
                    <p>
                      We used MongoDB as our database to manage data
                      effectively.
                    </p>
                  </li>
                  <li>
                    <p>Sale Purchase Logic is written thorowly.</p>
                  </li>
                  <li>
                    <p>
                      You can visit git repository for BackEnd{" "}
                      <a
                        href="https://github.com/cosmos-dx/MediTrade"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Project-card">
              <div className="Left-section">
                <div className="Project-namewithicon">
                  <img src={NearMedIcon} alt="" />
                  <div className="Project-Name">NearMed</div>
                </div>
                <a
                  href="https://nearmed.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={NearMed} alt="Project" />
                </a>
                <div className="Description">
                  A Helpful Product for End Users.{" "}
                </div>
                <br />
                <p>
                  NearMed is a Platform where end user can search for medicine
                  availability near his location. User can compare prices for
                  medicines and even can find by its generic name or composition
                  name. This is a platform which will be integrated to MediTrade
                  and Provide benifits to EndUsers as well as Medical Shop
                  Owners.
                </p>
                <ul>
                  <li>OTP Based Login</li>
                  <li>Medicin Management</li>
                  <li>Google Map Integrated</li>
                  <li>Better DB handling</li>
                </ul>
                <p>
                  You can visit git repository{" "}
                  <a
                    href="https://github.com/cosmos-dx/MediTrade"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
              <hr className="colored-hr" />
              <div className="Right-section">
                <div className="Information">Tech Stack</div>
                <h5>FrontEnd</h5>
                <ul>
                  <li>
                    <p>NearMed Uses Basic HTML CSS and JS for FrontEnd.</p>
                  </li>
                  <li>
                    <p>Google Map API is integrated.</p>
                  </li>
                  <li>
                    <p>OTP based Authentication</p>
                  </li>
                </ul>
                <h5>BackEnd</h5>
                <ul>
                  <li>
                    <p>
                      NearMed Backend is written in NodeJS and it uses Express
                      FrameWork.
                    </p>
                  </li>
                  <li>
                    <p>
                      We used MongoDB as our database to manage data
                      effectively.
                    </p>
                  </li>
                  <li>
                    <p>SMTP mail server is used to send OTP</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Project-card">
              <div className="Left-section">
                <div className="Project-namewithicon">
                  <img src={ALoneIco} alt="" />
                  <div className="Project-Name">Alone</div>
                </div>
                <a
                  href="https://github.com/cosmos-dx/ALone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Alone} alt="Project" />
                </a>
                <div className="Description">
                  Alone is an application helpful to user by keeping all
                  passwords at a single place.{" "}
                </div>
                <br />
                <p>
                  Alone is a Android JAVA based application which is helpful to
                  store user's passwords and valuable data to a single place. So
                  user will not have to remember all passwords.
                </p>
                <ul>
                  <li>SQL support</li>
                  <li>Biometric Authentication</li>
                  <li>Descent UI</li>
                  <li>JAVA used</li>
                  <li>Better DB handling</li>
                </ul>
                <p>
                  You can visit git repository{" "}
                  <a
                    href="https://github.com/cosmos-dx/Alone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
              <hr className="colored-hr" />
              <div className="Right-section">
                <div className="Information">Tech Stack</div>
                <h5>FrontEnd</h5>
                <ul>
                  <li>
                    <p>ALone Uses JAVA XML as its FrontEnd.</p>
                  </li>
                  <li>
                    <p>JAVA is used here to show logics.</p>
                  </li>
                  <li></li>
                </ul>
                <h5>BackEnd</h5>
                <ul>
                  <li>
                    <p>ALone Backend is written in JAVA code.</p>
                  </li>
                  <li>
                    <p>
                      We used SQL lite as our database to manage data
                      effectively.
                    </p>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (whichfrag === "terminal") {
      return (
        <div className="terminal-main">
          <Terminal
            welcomeMessage="Type help for getting active commands"
            prompt="root:~/"
          />
        </div>
      );
    } else if (whichfrag === "thunderbird") {
      return (
        <div className="thunderbird-main">
          <div className="thunderbird-screen">
            <div className="text">Wants to Contact ?</div>

            <div className="to-thunder">
              <input
                type="text"
                value={"abhishekgupta0118@gmail.com"}
                readOnly
              />
            </div>

            <div className="send-thunder">
              <form ref={form} onSubmit={sendEmail}>
                <input type="email" name="email" placeholder="Your Email" />
                <textarea
                  name="project"
                  cols="30"
                  rows="10"
                  placeholder="Enter your queires."
                />
                <input className="subbut" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      );
    } else if (whichfrag === "software") {
      return (
        <div className="software">
          <div className="item-card"  >
            <div className="imagecontainer">
              <img src={Skills} alt="mySkills" />
              <p>Skills</p>
            </div>
            <div className="item-card-text">
              <div >
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
                <span>React</span>
                <span>MongoDB</span>
              </div>
              <div>
                <span>Tkiner(Python)</span>
                <span>NodeJS</span>
                <span>C/C++</span>
                <span>Python</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
          <div className="item-card"  >
            <div className="imagecontainer">
              <img src={Qualification} alt="mySkills" />
              <p>Qualifications</p>
            </div>
            <div className="item-card-text">
              <div >
              <span> Btech - 8 SGPA &nbsp;</span>
               <span>Intermediate - 73%</span>
               <span>High School - 75%</span>
                
              </div>
              <div>
              <a href="https://profound-dasik-cd267f.netlify.app/#qualifications"><span>Check More About It Here</span></a>
              </div>
            </div>
          </div>
          <div className="item-card"  >
            <div className="imagecontainer">
              <img src={Linkedin} alt="mySkills" />
              <p>Linkedin</p>
            </div>
            <div className="item-card-text">
              <div >
              <a href="https://www.linkedin.com/in/abhishek-gupta-a1a44a203"><span>Check Profile Here</span></a>
              </div>
              <div>
              <a href="https://www.linkedin.com/in/abhishek-gupta-a1a44a203/recent-activity/all/"><span>Check Some Recent Post</span></a>
              </div>
            </div>
          </div>
          <div className="item-card"  >
            <div className="imagecontainer">
              <img src={Github} alt="mySkills" />
              <p>GitHub</p>
            </div>
            <div className="item-card-text">
              <div >
              <a href="https://github.com/cosmos-dx/MediTrade"><span>Repository MediTrade</span></a>
              <a href="https://github.com/cosmos-dx/near-Med"><span>Repository NearMed</span></a>
              </div>
              <div>
              <a href="https://github.com/cosmos-dx?tab=repositories"><span>Check other Repositories</span></a>
              <a href="https://github.com/cosmos-dx"><span>Check Profile</span></a>
              </div>
            </div>
          </div>
          <div className="item-card"  >
            <div className="imagecontainer">
              <img src={GFG} alt="mySkills" />
              <p>Coding Profiles</p>
            </div>
            <div className="item-card-text">
              <div >
              <a href="https://auth.geeksforgeeks.org/user/abhishekgupta1802/"><span>Check Profile</span></a>
              </div>
              <div>
              <a href="https://leetcode.com/cosmos_dx/"><span>Check Here too...</span></a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="fragment-container ">
      <div className="blur-background"></div>

      <div className="centered-fragment">
        <div className="fragment-top">
          {getrelatedicons()}

          <div className="closing-buttons">
            <div className="buttons-wrapper" onClick={onCloseTopFrag}>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <div className="buttons-wrapper" onClick={onCloseTopFrag}>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                />
              </svg>
            </div>
            <div className="buttons-wrapper" onClick={onCloseTopFrag}>
              <div className="box"></div>
            </div>
          </div>
        </div>
        {getrelatedcontents()}
      </div>
    </div>
  );
}

export default Index;
