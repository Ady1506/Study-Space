import React from 'react'
import './Maincard.css'
const Maincards = () => {
  return (
    <div className='cards'>
        <div className="card todocard">
            <h3>
                To Do
            </h3>
            <div className='entry todo'>
                <h4>Assignment</h4>
                <p>Don't forget to complete your assignment by tomorrow!</p>
            </div>
            <div className='entry todo'>
                <h4>Assignment</h4>
                <p>Don't forget to complete your assignment by tomorrow!</p>
            </div>
            <div className='entry todo'>
                <h4>Assignment</h4>
                <p>Don't forget to complete your assignment by tomorrow!</p>
            </div>
        </div>
        <div className="card meetcard">
            <h3>
                Meet
            </h3>
            <div className="entry meet">
                <h4>Group Meet</h4>
                <p>Meet today at 4pm</p>
            </div>
            <div className="entry meet">
                <h4>Group Meet</h4>
                <p>Meet today at 4pm</p>
            </div>
        </div>
        <div className="card chatcard">
            <h3>
                Chat
            </h3>
            <div className="entry chat">
                <h4>New Chat from Ady</h4>
                <p>Hey have you completed the assignment?</p>
            </div>
            <div className="entry chat">
                <h4>New Chat from Ady</h4>
                <p>Hey have you completed the assignment?</p>
            </div>
            <div className="entry chat">
                <h4>New Chat from Ady</h4>
                <p>Hey have you completed the assignment?</p>
            </div>
            <div className="entry chat">
                <h4>New Chat from Ady</h4>
                <p>Hey have you completed the assignment?</p>
            </div>
        </div>
    </div>
  )
}

export default Maincards