import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="side">
            <div className="side-logo">
                <div className="site-name">Study Space</div>
            </div>
            <div className="side-menu">
                <div className="side-menu-item meet">Meet</div>
                <div className="side-menu-item notes">Notes</div>
                <div className="side-menu-item chat">Chat</div>
                <div className="side-menu-item reminder">Reminder</div>
                <div className="side-menu-item members">Members</div>

            </div>
            <div className="side-logout">
                <a href="/">Logout</a>
            </div>
        </div>
  )
}

export default Sidebar