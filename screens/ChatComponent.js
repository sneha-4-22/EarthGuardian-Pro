import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const apiKey = 'VF.DM.6540faec31a963000835f911.fbIycgRux18o7wEM'; // Replace with your actual Voiceflow API key
  const userID = 'user_123'; // Unique ID used to track conversation state

  const handleSend = async (newMessages = []) => {
    try {
      const userMessage = newMessages[0];
      const userInput = userMessage.text;

      const body = {
        action: {
          type: 'text',
          payload: userInput,
        },
      };
      const userChatMessage = {
        _id: new Date().getTime() + 1,
        text: userInput,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'User',
        },
      };

      setMessages((previousMessages) => GiftedChat.append(previousMessages, [userChatMessage]));

      
      const response = await axios({
        method: 'POST',
        baseURL: 'https://general-runtime.voiceflow.com',
        url: `/state/user/${userID}/interact`,
        headers: {
          Authorization: apiKey,
        },
        data: body,
      });

      // Transform the Voiceflow API response into an array of message objects
      const botMessage = {
        _id: new Date().getTime(),
        text: response.data[response.data.length - 1].payload.message, // Extract the last message from the response
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Voiceflow Assistant',
        },
      };

      setMessages((previousMessages) => GiftedChat.append(previousMessages, [botMessage]));
    } catch (error) {
      console.error('Error in chatbot API request:', error);
    }
  };

  useEffect(() => {
    // Initial message when the component mounts
    const initialMessage = {
      _id: new Date().getTime(),
      text: 'Hi, my name is EcoBot from EcoSankalp🌱',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Voiceflow Assistant',
      },
    };

    setMessages([initialMessage]);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{
        _id: 1,
      }}
    />
  );
};

export default ChatComponent;
