import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View , Dimensions, Image, Animated, Linking} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showLoginScreen, setShowLoginScreen] = useState(false);

  const slideUpAnim = new Animated.Value(0);

  const handleLogin = () => {
    // Validate name and phone number (you can add your validation logic here)
    // If valid, navigate to the third screen
    Animated.timing(slideUpAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start(() => {
      setShowLoginScreen(true);
      navigation.navigate('HomeScreen'); // Navigate to ThirdScreen
    });

    if (name && phoneNumber) {
      navigation.navigate('HomeScreen', { name, phoneNumber });
    } else {
      alert('Please enter both name and phone number.');
    }
  };

  const handleTermsPress = () => {
    // Open the link in the device's default browser
    Linking.openURL('https://learnerbits.com');
  };

  const handlePrivacyPolicyPress = () => {
    // Open the Privacy Policy link in the device's default browser
    Linking.openURL('https://shreyashtidke.in');
  };

  const handleGoogleLogin = () => {
    // Navigate to HomeScreen when "Login with Google" is pressed
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
    <View>
      <Image
        source={require('./login-banner.png')}
        style={{width: '100%', height: 200, resizeMode: 'cover', marginTop: -80,}}
      />
    </View>
      <View style={styles.startEarningContainer}>
        <Text style={styles.startEarningText}>Start Your Earning Now !</Text>
      </View>
    <View style={styles.companyNameContainer}>
      <Text style={styles.companyName}>LearnerBits</Text>
    </View>
    <View style={styles.mobileContainer}>
    <View style={styles.googleLoginContainer}>
          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
            <Image
              source={require('./google-icon.png')}
              style={styles.googleIcon}
            />
            <Text style={styles.googleText}>Login with Google <AntDesign name="arrowright" size={24} color="black" /></Text> 
          </TouchableOpacity>
          
        </View>
      <Text style={styles.term}><Text style={styles.words}>
      By continuing, you agree to our {'\n'} 
        </Text> <Text style={styles.linkText} onPress={handleTermsPress}>
          Terms of Service &nbsp;
        </Text>
        <Text style={styles.and}>
           and &nbsp;
        </Text>
        <Text style={styles.linkText} onPress={handlePrivacyPolicyPress}>
           Privacy Policy
        </Text>
      </Text>

      {showLoginScreen && (
        <Animated.View
          style={[styles.loginContainer, { transform: [{ translateY: slideUpAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [300, 0],
          }) }] }]}
        >
          {/* Your login screen content goes here */}
        </Animated.View>
      )}
    </View>
  </View>
  

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Content is aligned to the bottom
    padding: 16,
    backgroundColor: '#F2F2F2', // Background color of the entire screen
  },
  companyNameContainer: {
    padding: 16,
    marginBottom: 40, // Border color for the bottom border of the company name container
  },
  companyName: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mobileContainer: {
    backgroundColor: 'black', // Background color of the bottom half of the mobile screen
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginHorizontal: -16,
    marginBottom: -20,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -2, // Negative height to create shadow at the top
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 2/3, // This style makes the container take half of the available space
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  
  input: {
    height: 60, // Increased input height
    width: '100%', // Take full width
    backgroundColor: 'white',
    borderColor: '#9d1afe',
    borderWidth: 2,
    marginBottom: 20, // Increased margin
    paddingHorizontal: 15, // Increased horizontal padding
    borderRadius: 15,
  },
  buttonContainer: {
    height: 60, // Increased input height
    width: '100%', // Take full width
    alignSelf: 'stretch',
    backgroundColor: '#9d1afe',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20, // Increased margin
    paddingHorizontal: 15,
    paddingVertical: 15, // Increased horizontal padding
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  term:{
    marginVertical: 20,
    fontSize: 15,
    color: 'white', // Color for the terms text
    textAlign: 'center',
  },
  words:{
    borderColor: '#9d1afe',
    fontSize: 15,
    borderWidth: 1,
  },
  linkText: {
    fontSize: 15,
    color: '#9d1afe', // Color for the clickable link
    borderColor: 'white',
    borderWidth: 1,
  },
  startEarningContainer: {
    backgroundColor: 'transparent', // Make the background transparent
    paddingTop: 20,
  },
  startEarningText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black', // Color for the start earning text
  },
  googleLoginContainer: {
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    height: 65,
    paddingHorizontal: 35,
    marginBottom: 20,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default LoginScreen;