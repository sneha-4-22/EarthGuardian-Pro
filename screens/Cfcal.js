import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const Cfcal = () => {
  const [co2Emissions, setCo2Emissions] = useState(0);
  const [coalPercent, setCoalPercent] = useState('');
  const [gasPercent, setGasPercent] = useState('');
  const [oilPercent, setOilPercent] = useState('');
  const [hydroPercent, setHydroPercent] = useState('');
  const [renewablePercent, setRenewablePercent] = useState('');
  const [nuclearPercent, setNuclearPercent] = useState('');

  const calculateCo2Emissions = () => {
    const coalPercentValue = parseFloat(coalPercent) || 0;
    const gasPercentValue = parseFloat(gasPercent) || 0;
    const oilPercentValue = parseFloat(oilPercent) || 0;
    const hydroPercentValue = parseFloat(hydroPercent) || 0;
    const renewablePercentValue = parseFloat(renewablePercent) || 0;
    const nuclearPercentValue = parseFloat(nuclearPercent) || 0;

    const coalCO2 = 12.34; 
    const gasCO2 = 23.45; 
    const oilCO2 = 34.56; 
    const hydroCO2 = 45.67; 
    const renewableCO2 = 56.78; 
    const nuclearCO2 = 67.89; 

    const coalEmissions = (coalCO2 * coalPercentValue) / 100;
    const gasEmissions = (gasCO2 * gasPercentValue) / 100;
    const oilEmissions = (oilCO2 * oilPercentValue) / 100;
    const hydroEmissions = (hydroCO2 * hydroPercentValue) / 100;
    const renewableEmissions = (renewableCO2 * renewablePercentValue) / 100;
    const nuclearEmissions = (nuclearCO2 * nuclearPercentValue) / 100;

    const totalEmissions =
      coalEmissions + gasEmissions + oilEmissions + hydroEmissions + renewableEmissions + nuclearEmissions;

    setCo2Emissions(totalEmissions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carbon Footprint Calculator</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Coal %</Text>
        <TextInput
          style={[styles.input, { color: 'white' }]}
          placeholder="Enter percentage"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={coalPercent}
          onChangeText={(text) => setCoalPercent(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gas %</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter percentage"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={gasPercent}
          onChangeText={(text) => setGasPercent(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Oil %</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter percentage"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={oilPercent}
          onChangeText={(text) => setOilPercent(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hydro %</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter percentage"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={hydroPercent}
          onChangeText={(text) => setHydroPercent(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Renewable %</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter percentage"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={renewablePercent}
          onChangeText={(text) => setRenewablePercent(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nuclear %</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter percentage"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={nuclearPercent}
          onChangeText={(text) => setNuclearPercent(text)}
        />
      </View>

      <Button title="Calculate" onPress={calculateCo2Emissions} />
      <Text style={styles.output}>Your total CO2 emissions are {co2Emissions} kg.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#071952",
    color:"#97FFF4"
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color:"#91C8E4",
    fontStyle:"italic",
    fontFamily:"serif",
    
  },
  inputContainer: {
    margin: 10,
    color:"white"
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"white"
  },
  input: {
    height: 40,
    padding: 10,
    borderColor: '#91C8E4',
    borderWidth: 1,
    borderRadius: 5,
    color:"white",
    
  },
  output: {
    fontSize: 16,
    margin: 10,
    color:"white",
    marginTop:25
  },
});

export default Cfcal;
