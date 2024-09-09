import React from 'react';
import { View, useWindowDimensions, Button, StyleSheet } from 'react-native';

const Part8 = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width , height: height * 0.5 }]}>
    <View style={{width: width/4, height: height/4}}>
      <Button title="Nút bấm" onPress={() => {}} />
    </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});

export default Part8;
