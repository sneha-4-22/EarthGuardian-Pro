import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
        <Text style={styles.buttonText}>Carbon Footprint Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleChatBotPress}>
        <Text style={styles.buttonText}>EcoSankalp Chat Bot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleChatBotPress}>
        <Text style={styles.buttonText}>Eco Mentorship</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleChatBotPress}>
        <Text style={styles.buttonText}>
          Leaderboard
        </Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002244'
  },
  button: {
    backgroundColor: '#B9D9EB',
    padding: 15,
    margin: 40,
    borderRadius: 20,
    width: '70%',
    borderWidth: 2, 
    borderColor: 'blue',
  },
  buttonText: {
    color: '#002244',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
