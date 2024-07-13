import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  // Sample data for class schedule
  const classScheduleData = [
    { day: 'Monday', time: '9:00 AM - 10:30 AM', subject: 'AI/ML' },
    { day: 'Tuesday', time: '10:00 AM - 11:30 AM', subject: 'JAVA' },
    { day: 'Wednesday', time: '1:00 PM - 2:30 PM', subject: 'HTML Basics' },
    { day: 'Thrusday', time: '10:00 AM - 11:30 AM', subject: 'React' },
    { day: 'Friday', time: '10:00 AM - 11:30 AM', subject: 'React Native' },
    { day: 'Saturday',  subject: 'NO CLASS...' },
    // Add more sample data as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Class Schedule</Text>
      <ScrollView style={styles.scheduleContainer}>
        {classScheduleData.map((classItem, index) => (
          <TouchableOpacity key={index} style={styles.classItem}>
            <Text style={styles.day}>{classItem.day}</Text>
            <Text style={styles.time}>{classItem.time}</Text>
            <Text style={styles.subject}>{classItem.subject}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scheduleContainer: {
    flex: 1,
  },
  classItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 16,
    marginBottom: 5,
  },
  subject: {
    fontSize: 16,
  },
});

export default ProfileScreen;
