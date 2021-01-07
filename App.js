import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Platform } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    permissionFlow();
  }, []);

  const permissionFlow = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(status);
    setPermission(status === 'granted');
  };

  if (permission !== 'granted') {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Funciona</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style='auto' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
