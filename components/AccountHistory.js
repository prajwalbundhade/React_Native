import React from 'react';
import { View, Text, StyleSheet, FlatList  } from 'react-native';

const accountHistoryData = [
    { id: '1', date: '2023-11-01', description: 'Received $10 from John' },
    { id: '2', date: '2023-10-28', description: 'Completed Task: Task Name' },
    { id: '3', date: '2023-11-01', description: 'Received $10 from John' },
    { id: '4', date: '2023-10-28', description: 'Completed Task: Task Name' },
    { id: '5', date: '2023-11-01', description: 'Received $10 from John' },
    { id: '6', date: '2023-10-28', description: 'Completed Task: Task Name' },
    // Add more history items as needed
  ];

const AccountHistory = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Account History</Text>
    <FlatList
      data={accountHistoryData}
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

export default AccountHistory;