import React from 'react';
import CHAT_DATA from './CHAT_DATA';

const ChatApp = () => {

  const chatItems = CHAT_DATA.chats.map(function(chat, index){
    return(
      <div>
        <h1> { chat.username } </h1>
        <h3 key> { chat.chat } </h3>
      </div>
    )
  });

  return(
    <div className="chat-container">
      { chatItems }
    </div>
  )
}

export default ChatApp;
