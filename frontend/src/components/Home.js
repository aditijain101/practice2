import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from "./Home.module.css";
import Users from "./assets/User's Conversation.svg";
import botImage from "./assets/bot.svg";

const Home = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [botReply, setBotReply] = useState('');
  const [messages, setMessages] = useState([]);

 

  const fetchMessages = async () => {
    try {
      const response = await axios.post('http://localhost:5000/chat', {
        message: inputMessage
      }
      ); // Update URL accordingly
      console.log('====================================');
      console.log("response.data", response.data);
      console.log('====================================');
      setMessages(prevMessages => [
        ...prevMessages,
        {
          sender: "bot",
          content: response.data.botReply
        }
      ]);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    try {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          sender: "User",
          content: inputMessage
        }
      ]);
      fetchMessages();
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  return (
    <div className={styles.chatcontainer}>
      <div className={styles.messagelist}>
        {messages.map((message, index) => (

          message.sender === "User" ? <>
            <div style={{
              display: "flex", alignSelf: "flex-end", gap: 3, width: "20%", justifyContent: "flex-end", alignItems: "center",
            }}>
              <div className={styles.mesageCntainer}>{message?.content}</div>
              <img src={Users} width={32} height={32} />

            </div>
          </> : <>
            <div style={{ display: "flex", textAlign: "left" }}>
              <img src={botImage} width={32} height={32} />
              <div className={styles.botReplyContainer}>{message?.content}</div>
            </div>
          </>

        ))}
      </div>
      <div className={styles.messageinput}>
        <input
          type="text"
          className={styles.inputbox}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className={styles.buttonContainer}>Send</button>
      </div>
    </div>
  )
}

export default Home;