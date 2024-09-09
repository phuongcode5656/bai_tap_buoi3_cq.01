import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, Dimensions } from 'react-native';

const Part5 = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const updateLayout = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);

  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.8;

  return (
    <View style={orientation === 'landscape' ? styles.row : styles.column}>
      <Image
        source={{ uri: './hinhanh.jpg' }} 
        style={{ width: imageWidth, height: imageWidth * 0.4 , resizeMode: 'contain'}} 
      />
      <Button title="Button 1" onPress={() => alert("nut 1")} />
      <Button title="Button 2" onPress={() => alert("nut 2")} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Part5;
