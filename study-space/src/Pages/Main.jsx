import React from 'react'
import './Main.css'
import Mainnav from "../components/Mainnav";
import Side from "../components/Sidebar"
import Maincards from "../components/Maincards"
const Main = () => {
  return (
    <div className='main-page'>
        <div className='main-page-body'>
          <Side />
          
          <div className="main-body">
            <Mainnav />
            <Maincards/>
          </div>
        </div>
        
    </div>
  )
}

export default Main