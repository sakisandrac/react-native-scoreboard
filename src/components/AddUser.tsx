import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function AddUser() {

  const [form, setForm] = useState({
    bananas: "",
    lastDayPlayed: "",
    longestStreak: "",
    name: "",
    stars: "",
    subscribed: false,
    uid: ""
  })

  const updateText = (name: string, text: string | number) => {

  }

  const handlePress = () => {

  }

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
        placeholder='bananas'
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
        placeholder='stars'
      />
      <Text style={styles.label}>Longest Streak Played:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => updateText('longestStreak', text)}
        value={form.longestStreak}
        placeholder='longestStreak'
      />
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
    width: 200,
    borderWidth: .5,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 10,
    margin: 10
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