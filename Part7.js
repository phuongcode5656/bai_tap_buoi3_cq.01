import React from 'react';
import { View, StatusBar, Platform, StyleSheet } from 'react-native';

const Part7 = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'yellow'}
        backgroundColor="blue"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Part7;
