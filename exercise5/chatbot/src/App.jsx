import { useState, useRef, useEffect } from 'react';
import './App.css';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import { Chatbot } from 'supersimpledev';

function App(){
  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessage] = useState(JSON.parse(localStorage.getItem('messages'))||[]);
  const [isLoading, setIsLoading] = useState(false);
  const chatMessageRef = useRef(null);

  useEffect(()=>{
    Chatbot.addResponses({
      "how are you?":"Fine, Thank You!"
    });
  },[])

  useEffect(()=>{
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages])

  const welcomeText =  chatMessages.length === 0 
    ? "Welcome to the chatbot project! Send a message using the textbox below."
    :"";
  
  return isLoading || !inputText
  ? (
      <div className="div-chat-container">
        
        <div 
          className="chat-message"
          ref={chatMessageRef}
        >
          <p
            className="welcome-text"
          >{welcomeText}</p>
          <ChatMessage 
            chatMessages={chatMessages}
            setChatMessage={setChatMessage}
            inputText={inputText}
            setInputText={setInputText} 
            chatMessageRef={chatMessageRef}
          />
          
        </div>
        <ChatInput 
          inputText={inputText}
          setInputText={setInputText} 
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          chatMessages={chatMessages}
          setChatMessage={setChatMessage}
        />
      </div>
    )
  : (
      <div className="div-chat-container">
        
        <div 
          className="chat-message" 
          ref = {chatMessageRef}
        >
          <p
            className="welcome-text"
          >{welcomeText}</p>
          <ChatMessage 
            chatMessages={chatMessages}
            setChatMessage={setChatMessage}
            inputText={inputText}
            setInputText={setInputText} 
            chatMessageRef={chatMessageRef}
          />
        
        </div>
        <ChatInput 
          chatMessages={chatMessages}
          setChatMessage={setChatMessage}
          inputText={inputText}
          setInputText={setInputText} 
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        
      </div>
    );
}

export default App
