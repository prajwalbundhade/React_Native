import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const BlogDetail = ({ route, navigation }) => {
  const { blogId } = route.params;

  // Simulated data for the blog details
  const blogDetails = {
    1: {
      title: 'How to Become Data Scientist – A Complete Data Science Roadmap 2024',
      content: 'What is Data Science Data science is an interdisciplinary field that utilizes scientific methods, algorithms, and systems to extract meaningful insights and knowledge from vast and diverse datasets. It amalgamates expertise from statistics, computer science, and domain-specific areas to analyze structured and unstructured data. Data scientists employ diverse tools, such as machine learning and data mining, to uncover patterns, trends, and valuable information. By exploring data, they aim to inform decision-making processes, identify correlations, and predict future outcomes. Data science plays a crucial role in business, healthcare, finance, and various other sectors, fostering innovation and driving evidence-based decision-making by transforming raw data into actionable intelligence.',
      author: 'John Doe',
      date: 'October 20, 2023',
      image: require('../images/blog1.png'),
    },
    // Add more blog details here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.blogTitle}>{blogDetails[blogId].title}</Text>
        
      </View>
      <Image source={blogDetails[blogId].image} style={styles.blogImage} />
      <Text style={styles.blogDateAuthor}>
          {blogDetails[blogId].date} by {blogDetails[blogId].author}
        </Text>
      <Text style={styles.blogContent}>{blogDetails[blogId].content}</Text>

      <TouchableOpacity
        style={styles.backToHomeButton}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.backToHomeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blogTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  blogDateAuthor: {
    fontSize: 14,
    color: '#555',
  },
  blogImage: {
    width: '100%',
    height: 200,
    marginTop: 16,
  },
  blogContent: {
    fontSize: 16,
    marginTop: 16,
  },
  backToHomeButton: {
    backgroundColor: '#9d1afe',
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  backToHomeButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BlogDetail;
