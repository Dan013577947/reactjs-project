import {Chatbot} from 'supersimpledev'
import './ChatInput.css'

function ChatInput({chatMessages, setChatMessage, inputText,      setInputText, isLoading, setIsLoading}){
  function saveInput(event){
    setInputText(event.target.value);
  }

  async function chatbotMessage(inputText){    
    setIsLoading(true);
    const botResponse = await Chatbot.getResponseAsync(inputText); 
    botResponse ? setIsLoading(false) : setIsLoading(true);
    setChatMessage(chatMessages=>{
      
      const filteredChatMessages = chatMessages.filter(item => item.message !== 'Loading...'
      );

      return [...filteredChatMessages, {
      message: botResponse,
      sender:'robot',
      id:crypto.randomUUID()
    }]});
  }
  
  /*used updater chatMessages =>[...chatMessages] to fix the chatMessages values
  which don't save user messages*/
  
  function sendMessage(){
    
    setChatMessage(chatMessages=>[...chatMessages, {
      message:inputText,
      sender:'user',
      id:crypto.randomUUID()
    }, {
      message:'Loading...',
      sender:'robot',
      id:crypto.randomUUID()
    }]);

    
    chatbotMessage(inputText);
    setInputText('');
  }
  function enterKeyDown(event){
    event.key === 'Enter' ? sendMessage():null;
    event.key === 'Escape' ? setInputText(''):null;
  }

  function clearMessage(){
    localStorage.removeItem('messages');
    setChatMessage([]);
  }

  
  return (
    <div className="div-chat-input">
      <input 
        type="text" 
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInput}
        value={inputText}
        onKeyDown={enterKeyDown}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="chat-send"
      >Send</button>
      <button
        onClick={clearMessage}
        className="chat-clear"
      >Clear</button>
    </div>
  );
}

export default ChatInput