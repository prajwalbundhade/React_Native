
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewProfileSection = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isMaleSelected, setIsMaleSelected] = useState(true);

    const toggleForm = () => {
      setIsFormOpen(!isFormOpen);
    };

    const navigation = useNavigation();
  
//   const handleSave = ()=>{
//     navigation.navigate('newProfileSection');
//   };
  
    const renderInputField = (placeholder, keyboardType = 'default') => (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    );
  
    return (
      <View style={styles.container}>
        <View style={styles.upperPart}>
          <TouchableOpacity style={styles.backIcon} onPress={toggleForm}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.profileDetails}>
            <View style={styles.addIconContainer}>
              <View style={styles.addIcon} />
              <TouchableOpacity style={styles.pencilIcon} onPress={toggleForm}>
                <AntDesign name="downcircle" size={40} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={[styles.text, styles.name]}>Your Name</Text>
          </View>
        </View>
        {isFormOpen && (
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Edit Details</Text>
            {renderInputField('User Name')}
            {renderInputField('Contact Number', 'phone-pad')}
            {renderInputField('Email ID', 'email-address')}
            {renderInputField('Date of Birth', 'default')}
            <View style={styles.checkboxContainer}>
              <Text style={styles.checkboxTitle}>Sex</Text>
              <View style={styles.checkboxOptions}>
                <View style={styles.checkbox}>
                  <Text style={styles.checkboxLabel}>Male</Text>
                  <CheckBox
                    checked={isMaleSelected}
                    onPress={() => setIsMaleSelected(true)}
                  />
                </View>
                <View style={styles.checkbox}>
                  <Text style={styles.checkboxLabel}>Female</Text>
                  <CheckBox
                    checked={!isMaleSelected}
                    onPress={() => setIsMaleSelected(false)}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          </View>
        )}
        {/* ... (previous code remains unchanged) ... */
        !isFormOpen && (
        <View style={styles.lowerPart}>
          <Text style={[styles.text, styles.info]}>User Name:</Text>
          <Text style={[styles.text, styles.infoContent]}>AkashSingh411</Text>
          <Text style={[styles.text, styles.info]}>Contact Number:</Text>
          <Text style={[styles.text, styles.infoContent]}>7065221541</Text>
          <Text style={[styles.text, styles.info]}>Email ID:</Text>
          <Text style={[styles.text, styles.infoContent]}>Akash.indianreveler@gmail.com</Text>
          <Text style={[styles.text, styles.info]}>Date of Birth:</Text>
          <Text style={[styles.text, styles.infoContent]}>16/02/2004</Text>
          <Text style={[styles.text, styles.info]}>Sex:</Text>
          <Text style={[styles.text, styles.infoContent]}>Male</Text>
        </View>
      )}
      </View>
    );
  };
  
  // ... (styles remain unchanged) ...
  
  // Add the following styles:
  const styles = StyleSheet.create({
    // ... (previous styles remain unchanged) ...
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      upperPart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30,
        paddingBottom: 40,
        overflow: 'hidden',
      },
      lowerPart: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 50,
        paddingBottom: 150,
      },
      formContainer: {
        height: 500, // Fixed height for the form container
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        paddingTop: 30,
        paddingBottom: 45,
      },
      formTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'purple', // updated border color to purple
        borderRadius: 10, // added border radius for a curved input
      },
      profileDetails: {
        flex: 1,
        alignItems: 'center',
      },
      text: {
        color: 'white',
      },
      info: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        alignSelf: 'flex-start',
      },
      infoContent: {
        fontSize: 20,
        padding: 5,
        color: 'black',
      },
      name: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 10,
        fontWeight: 'bold',
      },
      backIcon: {
        position: 'absolute',
        top: 40,
        left: 10,
      },
      addIconContainer: {
        paddingTop: 30,
        position: 'relative',
      },
      addIcon: {
        height: 150,
        width: 150,
        backgroundColor: 'grey',
        borderRadius: 75,
      },
      pencilIcon: {
        position: 'absolute',
        bottom: -100,
        left: 240,
        height: 45,
        width: 45,
        borderRadius: 700,
        backgroundColor: 'black',
      },
    checkboxContainer: {
      width: '80%',
      marginBottom: 20,
    },
    checkboxTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    checkboxOptions: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    checkbox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
    },
    checkboxLabel: {
      fontSize: 16,
      marginRight: 10,
    },
    saveButton: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        marginTop: 20,
      },
      saveButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
  });
  
  export default NewProfileSection;