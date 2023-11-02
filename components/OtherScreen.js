import React, { useState, useEffect  } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import {  } from '@fortawesome/free-brands-svg-icons';
import PlayStoreVouchers from './PlayStoreVouchers';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 




const OtherScreen = ({ route }) => {
  // Assuming you pass the userName as a route parameter


  const [balanceVisible, setBalanceVisible] = useState(false);
  const navigation = useNavigation();
  const [isPlayStoreModalVisible, setPlayStoreModalVisible] = useState(false);
  const [isPaypalModalVisible, setPaypalModalVisible] = useState(false);
  const [isPaytmModalVisible, setPaytmModalVisible] = useState(false);

  



  const handleBalancePress = () => {
    navigation.navigate('WalletScreen');
    // Add logic to fetch and display the balance here
  };
  
  // const handleRedirectPress = () => {
  //   // Navigate to the desired screen when the second section of the button is pressed
  //   navigation.navigate('OtherScreen');
  // };

  const handlePlayStorePress = () => {
    // Logic to open Play Store demo vouchers page
    setPlayStoreModalVisible(true);
  };

  const handlePaypalPress = () => {
    setPaypalModalVisible(true);
  };

  const handlePaytmPress = () => {
    setPaytmModalVisible(true);
  };


  

  return (
    <View style={styles.container}>    
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.buttonPart, styles.firstPart,]}
          onPress={handleBalancePress} 
        >
        <Text style={styles.buttonText}>Check Balance</Text>
        </TouchableOpacity>

     
        <TouchableOpacity
          style={[styles.buttonPart, styles.secondPart,]}
         
        >
          <Text style={styles.buttonText}>Wallet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.balanceContainer}>
      <TouchableOpacity>
        <Text style={styles.balanceText}>Balance: $100</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.sectionsContainer}>
       
       <TouchableOpacity style={styles.section} onPress={handlePlayStorePress}>
       {/* <FontAwesomeIcon icon={faGooglePlay} size={50} color="#4CAF50" /> */}
       <Image
       source={require('../images/Amazon_icon.png')} // Replace with the actual path to your Paytm logo image
       style={styles.paytmLogo}
        />
       </TouchableOpacity>

       
       <TouchableOpacity style={styles.section} onPress={handlePaypalPress}>
        {/* <FontAwesomeIcon icon={faPaypal} size={50} color="#4CAF50" /> */}
        <Image
       source={require('../images/Paypal_logo.png')} // Replace with the actual path to your Paytm logo image
       style={styles.paytmLogo}
        />
       </TouchableOpacity>

       <TouchableOpacity style={styles.section} onPress={handlePaytmPress}>
       <Image
       source={require('../images/paytm-logo.webp')} // Replace with the actual path to your Paytm logo image
       style={styles.newpaytmLogo}
        />
         
       </TouchableOpacity>
       
       
     </View>


     {/* Play Store Voucher Packs Modal */}
     <PlayStoreVouchers
       isVisible={isPlayStoreModalVisible}
       onClose={() => setPlayStoreModalVisible(false)}
     />
    
    <View style={styles.navigationContainer}>
              <View style={styles.navigationButton}>
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                  <View>
                      <Entypo name="home" size={30} color="white" />
                  </View>
              </TouchableOpacity>   
              </View>
              <View style={styles.navigationButton}>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
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
                  <View>
                      <MaterialIcons name="account-circle" size={30} color="white" />
                  </View>
              </View>
          </View>
    </View>
    
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
        backgroundColor: 'black', // First part color
        borderBottomLeftRadius: 30, // Set border radius for bottom-left corner
        borderTopLeftRadius: 30, // Set border radius for top-left corner
      },
      secondPart: {
        backgroundColor: '#9D1AFE', // Second part color
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
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      sectionsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        
      },
      section: {
        alignItems: 'center',
        padding: 30,
      },
      paytmLogo: {
        width: 50, // Adjust the width and height according to your design
        height: 50,
      },
      newpaytmLogo:{
        width: 80, // Adjust the width and height according to your design
        height: 50,
      },
      playStoreText: {
        marginTop:7,
        fontSize: 18, // Adjust the font size as needed
        fontWeight: 'bold', // Make the text bold
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

export default OtherScreen;