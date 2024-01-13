import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import axios from 'axios';


const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const apiKey = 'VF.DM.6540faec31a963000835f911.fbIycgRux18o7wEM';
  const userID = 'user_123'; 

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

      const botMessage = {
        _id: new Date().getTime(),
        text: response.data[response.data.length - 1].payload.message, 
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
    const initialMessage = {
      _id: new Date().getTime(),
      text: 'Hi, my name is EcoBot from EcoSankalp🌱',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Eco Bot',
      },
    };

    setMessages([initialMessage]);
  }, []);

  return (
    <View style={styles.container}>
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{
        _id: 1,
      }}
      renderUsernameOnMessage
      showUserAvatar
      alwaysShowSend
      renderSend={() => null}
      renderBubble={(props) => (
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: 'red', 
            },
            left: {
              backgroundColor: 'white', 
            },
          }}
        />
      )}
    />
  </View>
);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071952',
  },
});
export default ChatComponent;
