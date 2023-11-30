import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import { postNewUser } from '../apiCalls';

export default function AddUser() {

  const [form, setForm] = useState({
    bananas: "",
    lastDayPlayed: "",
    longestStreak: "",
    name: "",
    stars: "",
    subscribed: "",
  });

  const updateText = (name: string, text: any) => {
    setForm(prev => {
      return { ...prev, [name]: text }
    });
  };

  const showAlert = () => {
    Alert.alert(
      'Message:',
      'User Added Successfully!',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      { cancelable: false }
    );
  };

  const handlePress = async () => {
    const addNewUser = {
      bananas: parseInt(form.bananas),
      lastDayPlayed: form.lastDayPlayed,
      longestStreak: parseInt(form.longestStreak),
      name: form.name,
      stars: parseInt(form.stars),
      subscribed: JSON.parse(form.subscribed.toLowerCase()),
    };

    try {
      const data = await postNewUser(addNewUser);
      showAlert();
      setForm({
        bananas: "",
        lastDayPlayed: "",
        longestStreak: "",
        name: "",
        stars: "",
        subscribed: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 20 }}>Add A New User</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => updateText('name', text)}
        value={form.name}
        placeholder='name'
      />
      <Text style={styles.label}>Number of Bananas:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => updateText('bananas', text)}
        value={form.bananas}
        placeholder='enter number of bananas'
      />
      <Text style={styles.label}>Date Last Played</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => updateText('lastDayPlayed', text)}
        value={form.lastDayPlayed}
        placeholder='yyyy/mm/dd'
      />
      <Text style={styles.label}>Number of Stars:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => updateText('stars', text)}
        value={form.stars}
        placeholder='enter number of stars'
      />
      <Text style={styles.label}>Longest Streak Played:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => updateText('longestStreak', text)}
        value={form.longestStreak}
        placeholder='enter number of longest streak'
      />
      <Text style={styles.label}>Subscribed:</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => updateText('subscribed', 'true')}
        >
          <Text style={{}}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => updateText('subscribed', 'false')}
        >
          <Text style={{}}>No</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      >

        <Text style={{}}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE9',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textInput: {
    borderColor: '#000000',
    height: 40,
    width: 100,
    borderWidth: .5,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 10,
    margin: 5,
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#FDA2C5',
    margin: 3,
    padding: 8,
    justifyContent: 'center',
    borderRadius: 10,
    width: 100,
    alignItems: 'center'
  },
  label: {
    margin: 5
  }
});