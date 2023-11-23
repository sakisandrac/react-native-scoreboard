import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { data } from './src/data/data';
import { DataSet, UserType } from './src/types'
import { useState } from 'react';
import ScoreCard from './src/components/ScoreCard';

export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [searchName, setSearchName] = useState<string>("");

  const handlePress = () => {
    console.log(searchName)
    setSearchName(inputText)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Banana Scoreboard</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='username'
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      <ScoreCard key={1} data={data} searchName={searchName}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 50
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
  },
  inputContainer: {
    width: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textInput: {
    borderColor: '#000000',
    height: 50,
    width: 100,
    borderWidth: 1,
  },
  button: {
    borderColor: '#000000',
    height: 50,
    width: 100,
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'black'
  }
});
