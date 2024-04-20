import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.galleryContainer}>
        <Gallery />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', // Centering only vertically
    alignItems: 'stretch', // This stretches the child width-wise
  },
  galleryContainer: {
    flex: 1, // Ensures that the Gallery takes up all available space
    paddingHorizontal: 10, // Add padding if needed
  }
});
