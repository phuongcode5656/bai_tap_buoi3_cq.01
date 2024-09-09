import React from 'react';
import { View, StyleSheet, Platform, Button } from 'react-native';

const Part6 = () => {
  return (
    <View style={styles.container}>
      <Button title="Nút bấm" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Platform.select({
      ios: 20,
      android: 10,
    }),
    backgroundColor: Platform.OS === 'ios' ? 'blue' : '#333',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Part6;
