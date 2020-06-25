import React, { useState } from 'react';
import SimpleForm from './SimpleForm';
import './Chatbot.css';

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

    return (
      <>
      <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat 
            ? <button className="btn" onClick={() => startChat()}>CareBot </button> 
            : <button className="btn" onClick={() => hideChat()}>Fermer </button>}
        </div>
      </div>      
      </>
    )
}

export default Chatbot;