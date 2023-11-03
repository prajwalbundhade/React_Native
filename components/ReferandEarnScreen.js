import React, { useState } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Clipboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ReferAndEarnScreen = () => {
  const navigation = useNavigation();
  const [selectedSection, setSelectedSection] = useState('invite');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Refer & Earn</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, selectedSection === 'invite' ? styles.activeButton : null]}
            onPress={() => setSelectedSection('invite')}
          >
            <Text style={styles.btnText}>Invite</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, selectedSection === 'myinvites' ? styles.activeButton : null]}
            onPress={() => setSelectedSection('myinvites')}
          >
            <Text style={styles.btnText}>My Invites</Text>
          </TouchableOpacity>
        </View>

        
      </View>
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
      
      {selectedSection === 'invite' && <InviteSection />}
      {selectedSection === 'myinvites' && <MyInvitesSection />}
    
     
    
    </View>
    
  );
};

const InviteSection = () => {

  const copyToClipboard = async () => {
    try {
      await Clipboard.setString('shreyashtidke.in');
      alert('Referral link copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy referral link: ', error);
      alert('Failed to copy referral link. Please try again.');
    }
  };

  const handleInviteFriends = () => {
    // Implement your logic for inviting friends here
    // This function will be triggered when the "Invite Friends" button is pressed
  };
  

  const points = [
    'Refer your friends and earn 500 coins',
    'Any fake refers will not be entertained',
    'Redeem on only refer is not allowed',
  ];
  return (
    <View style={styles.sectionContainer}>
       <Image
        source={require('../images/ReferAndEarn.png')} // Specify the path to your image file
        style={styles.bannerImage}
        resizeMode="contain" // Choose an appropriate resize mode
      />
      <View style={styles.textContainer}>
        <Text style={styles.inviteText}>Invite Your Friend{'\n'}&{'\n'}Earn Rs 100 Instantly</Text>
      </View>

      <View style={styles.pointsContainer}>
        {points.map((point, index) => (
          <View style={styles.pointContainer} key={index}>
            <View style={styles.circleIcon} />
            <Text style={styles.pointText}>{point}</Text>
          </View>
        ))}
      </View>

      <View style={styles.dashedSection}>
        <Text style={styles.referEarnText}>https://shreyashtidke.in</Text>
        <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
          <FontAwesome5 name="copy" size={18} color="#fff" />
          <Text style={styles.copyButtonText}>Copy</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleInviteFriends} style={styles.invite}>
        <Text style={{ color: '#fff', fontSize: 18 }}>Invite Friends</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const MyInvitesSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* No Invites Icon */}
      <FontAwesome5 name="user-friends" size={100} color="#888" style={{ marginBottom: 20 }} />

      {/* No Invites Text */}
      <Text style={{ fontSize: 18, color: '#888', marginBottom: 10 }}>No Invites</Text>
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    
  },
  header: {
    paddingTop: 30, // Adjust as needed
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    flex: 1,
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#9D1AFE',
  },
  btnText:{
    color:'white',
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -20,
    marginHorizontal: 20,
  },
  bannerImage: {
    width: '100%', // Make the image fill the container horizontally
    height: '30%',
     // Set an appropriate height for the image
  },
  textContainer: {
    marginTop: -20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteText: {
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
  pointsContainer: {
    marginVertical: 5,
    width: '80%',
    marginLeft: 115,
  },
  pointContainer: {
    flexDirection: 'row', // Display items in the same line
    alignItems: 'center',
    marginVertical: 2,
  },
  
  circleIcon: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#000', // Dark circle color
    marginRight: 10,
  },
  pointText: {
    fontSize: 10,
    fontWeight:'bold',
  },
  dashedSection: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: '#9D1AFE', // Dashed border color
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  referEarnText: {
    fontSize: 18,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9D1AFE', // Copy button background color
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  copyButtonText: {
    color: '#fff',
    marginLeft: 5,
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
  invite:{
    backgroundColor: '#9d1afe', 
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 17, // Right margin added here
    marginLeft: 10, 
    marginTop: 20,
  }
 
});

export default ReferAndEarnScreen;