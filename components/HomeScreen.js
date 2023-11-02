import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import { Svg, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook



const HomeScreen = ({}) => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={styles.background}>
       <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
           
            <Stop offset="100%" stopColor="#d1d1d1" />
          </LinearGradient >
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <View style={styles.content}>
      <View style={styles.topView}>
        <View style={styles.profileContainer}>
          
          <Image
          source={require('./Mainlogo1.png')}
          style={styles.logo}
        />
        </View>
        <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>1000</Text>
        <FontAwesome5 name="coins" size={23} color="green" />
        </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardRow}>
            <View style={styles.card}>
              <View style={styles.cardInfoContainer}>
                <Text style={styles.cardInfoText}>Daily Login</Text>
              </View>
              <Image
                source={require('./daily-sign.jpg')}
                style={styles.cardImage}
              />
              <View style={styles.cardButtonContainer}>
                <Text style={styles.cardButtonText}>Claim</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardInfoContainer}>
                <Text style={styles.cardInfoText}>Spin & Win</Text>
              </View>
              <Image
                source={require('./spin.png')}
                style={styles.cardImage}
              />
              <View style={styles.cardButtonContainer}>
                <Text style={styles.cardButtonText}>Spin</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardInfoContainer}>
                <Text style={styles.cardInfoText}>Watch & Earn</Text>
              </View>
              <Image
                source={require('./watch.png')}
                style={styles.cardImage}
              />
              <View style={styles.cardButtonContainer}>
                <Text style={styles.cardButtonText}>Watch</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.card}>
              <View style={styles.cardInfoContainer}>
                <Text style={styles.cardInfoText}>Read & Earn</Text>
              </View>
              <Image
                source={require('./refer.png')}
                style={styles.cardImage}
              />
              <View style={styles.cardButtonContainer}>
                <Text style={styles.cardButtonText}>Read</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardInfoContainer}>
                <Text style={styles.cardInfoText}>Leaderboard</Text>
              </View>
              <Image
                source={require('./leaderboard.png')}
                style={styles.cardImage}
              />
              <View style={styles.cardButtonContainer}>
                <Text style={styles.cardButtonText}>View</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardInfoContainer}>
                <Text style={styles.cardInfoText}>Need Help?</Text>
              </View>
              <Image
                source={require('./help.png')}
                style={[styles.cardImage, { width: 70, height: 70 }]}
              />
              <View style={styles.cardButtonContainer}>
                <Text style={styles.cardButtonText}>Click Here</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.referEarnContainer}>
          <View style={styles.referEarn}>
            <Text style={styles.cardInfoText}>Refer and Earn</Text>
          </View>
          <View style={styles.viewAll}>
            <Text style={styles.viewAllText}>View All</Text>
            <Text style={styles.arrowSymbol}>&gt;&gt;</Text>
          </View>
        </View>
        <Image
          source={require('./refer-banner.png')}
          style={styles.bottomDivider}
        />
        {/* Navigation container */}
        <View style={styles.navigationContainer}>
      <View style={styles.navigationButton}>
        <View>
          <Entypo name="home" size={30} color="white" />
        </View>
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
        <View>
          <MaterialIcons name="account-circle" size={30} color="white" />
        </View>
      </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    zIndex: -1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    position: 'absolute',
    top: 20, // Updated value to create more space between sections
    left: 0,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  
  balanceContainer: {
    position: 'absolute',
    top: 30, // Updated value to create more space between sections
    right: 10,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    color: 'black',
    fontSize: 17,
    paddingRight: 10,
    fontWeight: 'bold',
  },
  cardContainer: {
    marginTop: 150,
    zIndex: 1,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: 110,
    height: 110,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 15, // Add this property for border radius
  },
  cardInfoContainer: {
    position: 'absolute',
    top: 5,
  },
  cardInfoText: {
    color: 'black',
    fontWeight: 'bold', 
  },
  cardImage: {
    width: 45,
    height: 45,
  },
  cardButtonContainer: {
    backgroundColor: '#8542FA',
    height: 20,
    width: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
  },
  cardButtonText: {
    color: 'white',
  },
  referEarnContainer: {
    marginTop: 60, // Updated value to create more space between sections
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  referEarn: {
    flex: 1,
    color: '#9d1afe',
  },
  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    color: '#9d1afe',
  },
  arrowSymbol: {
    color: '#9d1afe',
    marginLeft: 5,
  },
  bottomDivider: {
    marginTop: 20,
    borderRadius: 10,
    width: '100%',
    height: 150,
    backgroundColor: '#ffffff',
    zIndex: 1,
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
  buttonShape: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  navigationText: {
    color: 'black',
  },
  logo: {
    width: 150, // Adjust the width and height as needed
    height: 30,
    marginTop: 10, // Add margin to separate the logo from the text
  },
  topView:{
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginBottom: 2,
  }
});

export default HomeScreen;