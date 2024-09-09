import React from 'react';
import { KeyboardAvoidingView, TextInput, Platform, StyleSheet, View } from 'react-native';

const Part4 = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <TextInput placeholder="Nhập văn bản" multiline style={styles.input} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default Part4;
