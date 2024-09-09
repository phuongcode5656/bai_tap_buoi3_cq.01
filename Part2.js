import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const Part2 = () => {
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.8; 

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "./images.jfif" }} 
        style={{ width: imageWidth, height: imageWidth * 0.6 }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Part2;
