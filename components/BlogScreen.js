import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const BlogScreen = ({ navigation }) => {
  const blogs = [
    {
      id: 1,
      title: 'How to Become Data Scientist – A Complete Data Science Roadmap 2024',
      date: 'October 20, 2023',
      author: 'John Doe',
      image: require('../images/blog1.png'),
    },
    // Add more blog entries here
  ];

  const navigateToBlogDetail = (blogId) => {
    navigation.navigate('BlogDetail', { blogId });
  };

  return (
    <ScrollView style={styles.container}>
      {blogs.map((blog) => (
        <TouchableOpacity
          key={blog.id}
          style={styles.blogCard}
          onPress={() => navigateToBlogDetail(blog.id)}
        >
          <Image source={blog.image} style={styles.blogImage} />
          <Text style={styles.blogTitle}>{blog.title}</Text>
          <Text style={styles.blogDateAuthor}>
            {blog.date} by {blog.author}
          </Text>
          <View style={styles.readMoreButton}>
            <Text style={styles.readMoreButtonText}>Read More</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  blogCard: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  blogImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  blogDateAuthor: {
    fontSize: 14,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  readMoreButton: {
    backgroundColor: '#9d1afe',
    padding: 12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  readMoreButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BlogScreen;
