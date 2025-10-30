import { useEffect } from "react";
import './ChatMessage.css'
import UserImage from '../assets/Danilo Image.jpg'
import RobotImage from '../assets/robot.png'
import LoadingSpinner from '../assets/loading-spinner.gif'
import dayjs from 'dayjs'

function ChatMessage({chatMessages, setChatMessage, inputText, setInputText, chatMessageRef}){
  useAutoScroll(chatMessages);
  
  function useAutoScroll(dependencies){
    useEffect(()=>{
      const chatMessageElem = chatMessageRef.current;
      chatMessageElem.scrollTop = chatMessageElem.scrollHeight;
    }, [dependencies]);
  }

  const time = dayjs().valueOf();
  const hourMinute = dayjs(time).format('h:mma');

  return(chatMessages.map((item)=>{
    return item.sender === 'user' 
    ? (<div 
        key={item.id}
        className="chat-user">
        <div className="chat-message-user">
          <div>{item.message}</div>
          <div className="hour-minute">{hourMinute}</div>
          </div>
        <img className="user-image" src={UserImage} alt="user" />
      </div>)
    : (<div key={item.id}
        className="chat-robot">
        <img className="robot-image" src={RobotImage} alt="robot" />

        <div className="chat-message-robot">
          <div>
            {
              item.message === 'Loading...'
              ? <img className="spinner" src={LoadingSpinner} />
              : item.message
            }
          </div>
          <div className="hour-minute">{hourMinute}</div>
        </div>
      </div>);
  }));
}

export default ChatMessage