import React, { useState, useEffect } from 'react';
import { View, Button, Dimensions, StyleSheet } from 'react-native';

const Part3 = () => {
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

  return (
    <View style={orientation === 'landscape' ? styles.row : styles.column}>
      <View style={{marginVertical: 10}} >
      <Button title="Button 1" onPress={() => {}} />
      </View>
      <View style={{marginVertical: 10}} >
      <Button title="Button 2" onPress={() => {}} />
      </View>
      
      
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

export default Part3;
