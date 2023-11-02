import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

const PlayStoreVouchers = ({ isVisible, onClose }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Voucher Packs */}
          <TouchableOpacity style={styles.voucherContainer}>
      <Text style={styles.title}>Google Play Store</Text>
      <View style={styles.content}>
        <Text style={styles.amount}>$10</Text>
        <Text style={styles.description}>Gift Card</Text>
      </View>
      <Text style={styles.validity}>Valid until 31 Dec, 2023</Text>
      <Text style={styles.coins}>50 Coins</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.voucherContainer}>
      <Text style={styles.title}>Google Play Store</Text>
      <View style={styles.content}>
        <Text style={styles.amount}>$50</Text>
        <Text style={styles.description}>Gift Card</Text>
      </View>
      <Text style={styles.validity}>Valid until 31 Dec, 2023</Text>
      <Text style={styles.coins}>100 Coins</Text>

    </TouchableOpacity>
    <TouchableOpacity style={styles.voucherContainer}>
      <Text style={styles.title}>Google Play Store</Text>
      <View style={styles.content}>
        <Text style={styles.amount}>$100</Text>
        <Text style={styles.description}>Gift Card</Text>
      </View>
      <Text style={styles.validity}>Valid until 31 Dec, 2023</Text>
      <Text style={styles.coins}>500 Coins</Text>
    </TouchableOpacity>
          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    height:'90%',
    width:'90%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  voucherPack: {
    marginVertical: 10,
  },
  closeButton: {
    marginTop: 20,
  },
  voucherText: {
    fontSize: 18, // Adjust the font size as needed
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#9D1AFE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  closeButtonText: {
    fontSize: 25,
    fontWeight: 'bold', // Adjust the font size as needed
  },
  voucherContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 25,
    paddingHorizontal: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50', // Google Play Store green color
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  description: {
    marginLeft: 5,
    color: '#4CAF50',
  },
  validity: {
    fontSize: 12,
    color: '#888',
  },
  coins: {
    fontSize: 25,
    color: 'black', // Coin color
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default PlayStoreVouchers;