import React from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import axios from "axios";
import "../chatbot.css";

export default function ChatBot() {
  const url = "http://0865021c0e01.ngrok.io/";
  const data = [];
  // Print hello in the beginning of the app
  React.useEffect(() => {
    addResponseMessage(`Hello!`);
  }, []);

  // Function to handle if a new message is added
  const handleNewUserMessage = (newMessage) => {
    getBotResponse(newMessage);
  };

  // Gets the response from python server using axios
  const getBotResponse = async (userMessage) => {
    await axios
      .post(url, `${userMessage}`)
      .then((res) => {
        res.data.messages.map((message) => addResponseMessage(`${message}`));
      })
      .catch((err) => {
        console.log(`Axios request failed: ${err}`);
      });
  };

  // Make the widget
  return (
    <div>
      <Widget
        title="Chatbot"
        subtitle=""
        handleNewUserMessage={handleNewUserMessage}
      />
    </div>
  );
}
