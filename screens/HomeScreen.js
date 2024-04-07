import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCarbonFootprintPress = () => {
    navigation.navigate("Cfcal");
  };

  const handleChatBotPress = () => {
    navigation.navigate("ChatComponent");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleCarbonFootprintPress}
      >
        <Image
          source={require('./images/calculator.jpg')}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Carbon Footprint Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleChatBotPress}>
        <Image
          source={require('./images/bot.jpg')}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>EarthGuardian Pro Chat Bot</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleChatBotPress}
      >
        <Image
          source={require('./images/leaderboard.jpg')}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Leaderboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleChatBotPress}>
        <Image
          source={require('./images/mentorship.jpg')}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>EcoMentorship</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#86B6F6'
  },
  button: {
    backgroundColor: '#27005D',
    padding: 10,
    marginTop: 20,
    borderRadius: 25,
    width: '80%', 
    borderWidth: 2,
    borderColor: 'blue',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontStyle:"italic",
    // fontWeight: 'bolder',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    
  },
  buttonImage: {
    width: 290,
    height: 100,
    marginBottom: 10,
  },
});

export default HomeScreen;

