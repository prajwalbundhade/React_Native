import React, { useState }  from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import AccountHistory from './AccountHistory';
import RewardHistory from './RewardHistory';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 




const WalletScreen = ({ route }) => {
  // Assuming you pass the userName as a route parameter
  const [balanceVisible, setBalanceVisible] = useState(false);
  const navigation = useNavigation();
  const [showAccountHistory, setShowAccountHistory] = useState(false);
  const [showRewardHistory, setShowRewardHistory] = useState(false);


  const handleBalancePress = () => {
    setBalanceVisible(true);
    // Add logic to fetch and display the balance here
  };

  const handleRedirectPress = () => {
    // Navigate to the desired screen when the second section of the button is pressed
    
    // Navigate to OtherScreen and pass the state as a parameter
    navigation.navigate('OtherScreen');
  };


  const handleAccountHistoryClick = () => {
    setShowAccountHistory(true);
    setShowRewardHistory(false);
  };

  const handleRewardHistoryClick = () => {
    setShowAccountHistory(false);
    setShowRewardHistory(true);
  };

  

  return (
    <>
    <View style={styles.container}>
          <View style={styles.buttonContainer}>
              <TouchableOpacity
                  style={[styles.buttonPart, styles.firstPart]}
                  onPress={handleBalancePress}
              >
                  <Text style={styles.buttonText}>Check Balance</Text>
              </TouchableOpacity>


              <TouchableOpacity
                  style={[styles.buttonPart, styles.secondPart]}
                  onPress={handleRedirectPress}
              >
                  <Text style={styles.buttonText}>Wallet</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.balanceContainer}>
              <TouchableOpacity>
                  <Text style={styles.balanceText}>Balance: $100</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn} onPress={handleAccountHistoryClick}>
                  <Text style={styles.btnText}>Account History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={handleRewardHistoryClick}>
                  <Text style={styles.btnText}>Reward History</Text>
              </TouchableOpacity>


          </View>

          {/* Render Account History */}
          {showAccountHistory && <AccountHistory />}

          {/* Render Reward History */}
          {showRewardHistory && <RewardHistory />}
          <View style={styles.navigationContainer}>
              <View style={styles.navigationButton}>
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                  <View>
                      <Entypo name="home" size={30} color="white" />
                  </View>
              </TouchableOpacity>   
              </View>
              <View style={styles.navigationButton}>
              <TouchableOpacity onPress={() => navigation.navigate('ReferAndEarnScreen')}>
                  <View>
                      <MaterialIcons name="attach-money" size={30} color="white" />
                  </View>
              </TouchableOpacity>
              </View>
              <View style={styles.navigationButton}>
                  <TouchableOpacity onPress={() => navigation.navigate('WalletScreen')}>
                      <View>
                          <MaterialIcons name="redeem" size={30} color="white" />
                      </View>
                  </TouchableOpacity>
              </View>
              <View style={styles.navigationButton}>
              <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                  <View>
                      <MaterialIcons name="account-circle" size={30} color="white" />
                  </View>
                  </TouchableOpacity>
              </View>
          </View>
      </View></>
        
    
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor:'white',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5, // Increase vertical padding to increase button height
        paddingHorizontal: 15,
        marginTop: 60,
      },
      buttonPart: {
        flex: 1,
        paddingVertical: 20,
        alignItems: 'center',
      },
      firstPart: {
        backgroundColor: '#9D1AFE', // First part color
        borderBottomLeftRadius: 30, // Set border radius for bottom-left corner
        borderTopLeftRadius: 30, // Set border radius for top-left corner
      },
      secondPart: {
        backgroundColor: '#000', // Second part color
        borderBottomRightRadius: 30, // Set border radius for bottom-right corner
        borderTopRightRadius: 30, // Set border radius for top-right corner
      },
      buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
      balanceContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 20,
        elevation: 5, // Android shadow
        shadowColor: '#000000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center',
      },
      balanceText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4CAF50',
      },
      btnContainer : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
      },
      btn: {
        backgroundColor: '#9D1AFE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
      },
      btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      navigationContainer: {
        position: 'absolute',
        bottom: 20, // Adjust this value to lift the navigation container higher from the bottom
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical: 17,
        backgroundColor: 'black',
        zIndex: 1,
        borderTopLeftRadius: 100, // Adjust this value to create an oval shape
        borderTopRightRadius: 100, // Adjust this value to create an oval shape
        borderBottomLeftRadius: 100, // Adjust this value to create an oval shape
        borderBottomRightRadius: 100, // Adjust this value to create an oval shape
        alignItems: 'center', // Align items to the center
        marginLeft: 20, // Adjust this value as needed
      },
      navigationButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', // Centering the navigation buttons
      },
    
});

export default WalletScreen