import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ProfileScreen() {
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    if (!username || !city || !age || !email) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    Alert.alert('Success', 'User added successfully!');
    setUsername('');
    setCity('');
    setAge('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <Button title="Add User" onPress={handleAddUser} color="#1E90FF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1E90FF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    padding: 8,
    marginBottom: 16,
    width: '100%',
    borderRadius: 8,
  },
});
