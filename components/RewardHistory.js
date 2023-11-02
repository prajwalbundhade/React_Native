import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const rewardHistoryData = [
    { id: '1', date: '2023-11-05', description: 'Received 100 points for completing a task' },
    { id: '2', date: '2023-10-30', description: 'Earned a reward coupon for $20 off' },
    // Add more reward history items as needed
  ];

const RewardHistory = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Reward History</Text>
    <FlatList
      data={rewardHistoryData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.historyItem}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      )}
    />
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    historyItem: {
      marginBottom: 10,
    },
    date: {
      fontSize: 14,
      color: '#888',
      marginBottom: 5,
    },
    description: {
      fontSize: 16,
    },
  });

export default RewardHistory;