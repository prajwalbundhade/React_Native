import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.content}>
     
        <Text style={styles.firstLine}>Hey,</Text>
        <Text style={styles.secondLine}>WELCOME TO</Text>

        {/* Add your logo/image below the text */}
        <Image
          source={require('./Mainlogo1.png')}
          style={styles.logo}
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
  },
  content: {
    fontFamily: 'sans-serif-medium',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstLine: {
    
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  secondLine: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  logo: {
    width: '100%', // Adjust the width and height as needed
    height: '10%',
    marginTop: 90, // Add margin to separate the logo from the text
  },
  buttonContainer: {
    alignSelf: 'stretch',
    backgroundColor: '#9d1afe',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StartScreen;
