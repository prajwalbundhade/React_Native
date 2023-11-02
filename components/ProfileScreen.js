import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet,Text ,TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';




const ProfileScreen = () => {
  const navigation = useNavigation();

  
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <View style={styles.innerBoxLeft}>
          <View style={styles.innerBoxLeft}>
            <FontAwesome5 name="user-secret" size={45} color="black" />
          </View>
          </View>
          <View style={styles.innerBoxRight}>
          <TouchableOpacity onPress={() => navigation.navigate('NewProfileSection')}>
          <Text style={styles.text}>My Profile</Text>
          <AntDesign style={styles.icon} name="right" size={30} color="black"/>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <View style={styles.innerBoxLeft}>
          <FontAwesome name="money" size={45} color="black" />
          </View>
          <View style={styles.innerBoxRight}>
          <Text style={styles.text}>Transaction History</Text>
          <AntDesign style={styles.icon} name="right" size={30} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
        <View style={styles.innerBoxLeft}>
        <AntDesign name="customerservice" size={45} color="black" />
          </View>
          <View style={styles.innerBoxRight}>
          <Text style={styles.text}>FAQs</Text>
          <AntDesign style={styles.icon} name="right" size={30} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
        <View style={styles.innerBoxLeft}>
        <MaterialIcons name="privacy-tip" size={45} color="black" />
          </View>
          <View style={styles.innerBoxRight}>
          <Text style={styles.text}>Privacy Policy</Text>
          <AntDesign style={styles.icon} name="right" size={30} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
        <View style={styles.innerBoxLeft}>
        <Octicons name="law" size={45} color="black" />
          </View>
          <View style={styles.innerBoxRight}>
          <Text style={styles.text}>Terms & Conditions</Text>
          <AntDesign style={styles.icon} name="right" size={30} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
        <View style={styles.innerBoxLeft}>
        <Entypo name="log-out" size={45} color="black" />
          </View>
          <View style={styles.innerBoxRight}>
          <Text style={styles.text}>Logout</Text>
          <AntDesign style={styles.icon} name="right" size={30} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20, // Adjust the font size as needed
    padding:20,
  },
  box: {
    width: 380,
    height: 70,
    marginVertical: 20,
    borderRadius: 20, // Add border radius to the box
    overflow: 'hidden',
  },
  innerBox: {
    flex: 1,
    flexDirection: 'row',
  },
  innerBoxLeft: {
    flex: 2,
    backgroundColor: '#9d1afe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBoxRight: {
    flex: 7,
    backgroundColor: '#d1d1d1 ',
  },
  icon: {
    position: 'absolute',
    right: 10,
    marginTop: 20,
  },
});


export default ProfileScreen;