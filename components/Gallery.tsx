import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { images } from '../imageList'; // Adjust the path as necessary

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
//   console.log("Current index: ", currentIndex, "Image URL: ", images[currentIndex].url);

  return (
    <View style={styles.container}>
      <Image source={images[currentIndex].url} style={styles.image} />
      <Text style={styles.description}>{images[currentIndex].description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handlePrevious}
          disabled={currentIndex === 0}
          style={[styles.button, currentIndex === 0 && styles.disabledButton]}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNext}
          disabled={currentIndex === images.length - 1}
          style={[styles.button, currentIndex === images.length - 1 && styles.disabledButton]}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    padding: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5, // Added for rounded corners
  },
  buttonText: {
    color: '#333',
    fontSize: 16, // Consistent font size with the description
  },
  disabledButton: {
    backgroundColor: '#ccc',
    borderColor: '#ccc',
  },
});

export default Gallery;
