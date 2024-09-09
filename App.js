import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import các màn hình cho từng phần
import Part1 from './Part1'; // Phần 1: Sử dụng Dimensions API
import Part2 from './Part2'; // Phần 2: Điều chỉnh kích thước hình ảnh
import Part3 from './Part3'; // Phần 3: Xử lý thay đổi hướng màn hình
import Part4 from './Part4'; // Phần 4: KeyboardAvoidingView
import Part5 from './Part5'; // Phần 5: Thiết kế chế độ ngang
import Part6 from './Part6'; // Phần 6: Mã riêng cho từng nền tảng
import Part7 from './Part7'; // Phần 7: Tùy chỉnh thanh trạng thái
import Part8 from './Part8'; // Phần Thử thách: useWindowDimensions

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
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
    <View style={orientation === 'portrait' ? styles.containerPortrait : styles.containerLandscape}>
      <View style={styles.buttonContainer}>
        <Button  title="Phần 1: Dimensions API" onPress={() => navigation.navigate('Part1')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Phần 2: Điều chỉnh hình ảnh" onPress={() => navigation.navigate('Part2')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Phần 3: Thay đổi hướng màn hình" onPress={() => navigation.navigate('Part3')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Phần 4: KeyboardAvoidingView" onPress={() => navigation.navigate('Part4')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Phần 5: Thiết kế chế độ ngang" onPress={() => navigation.navigate('Part5')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Phần 6: Mã riêng cho từng nền tảng" onPress={() => navigation.navigate('Part6')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Phần 7: Tùy chỉnh thanh trạng thái" onPress={() => navigation.navigate('Part7')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Phần 8: useWindowDimensions" onPress={() => navigation.navigate('Part8')} />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Màn hình chung' }} />
        <Stack.Screen name="Part1" component={Part1} options={{ title: 'Phần 1: Dimensions API' }} />
        <Stack.Screen name="Part2" component={Part2} options={{ title: 'Phần 2: Điều chỉnh hình ảnh' }} />
        <Stack.Screen name="Part3" component={Part3} options={{ title: 'Phần 3: Thay đổi hướng màn hình' }} />
        <Stack.Screen name="Part4" component={Part4} options={{ title: 'Phần 4: KeyboardAvoidingView' }} />
        <Stack.Screen name="Part5" component={Part5} options={{ title: 'Phần 5: Thiết kế chế độ ngang' }} />
        <Stack.Screen name="Part6" component={Part6} options={{ title: 'Phần 6: Mã riêng cho từng nền tảng' }} />
        <Stack.Screen name="Part7" component={Part7} options={{ title: 'Phần 7: Tùy chỉnh thanh trạng thái' }} />
        <Stack.Screen name="Part8" component={Part8} options={{ title: 'Phần 8: useWindowDimensions' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  containerPortrait: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  containerLandscape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    flexWrap: 'wrap',
  },
  buttonContainer: {
    marginVertical: 10, // Tạo khoảng cách trên dưới cho các nút
  },
});

export default App;
