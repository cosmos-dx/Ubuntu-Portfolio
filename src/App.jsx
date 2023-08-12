import { useEffect, useState } from 'react'
import './App.css'
import NavBar from "./Components/NavBar/Index";
import SideBar from "./Components/SideBar/Index";
import UbuntuIcon from "./assets/images/ubuntu-icon.svg";
function App() {
  const [loader, setloader] = useState (true);
  useEffect(()=>{
    setTimeout(() => {
      setloader(false);
    }, 3000);
  },[])
  return (
    <>
      {loader ? <div className='loadergif'><img src={UbuntuIcon}/><span>abhishek</span><div className="dots">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        </div></div> : <><NavBar />
      <SideBar /></>}     
      
    </>
  )
}

export default App
