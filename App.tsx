import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { data } from './src/data/data';
import { DataSet, UserType } from './src/types'
import { useState } from 'react';
import ScoreCard from './src/components/ScoreCard';

export default function App() {
  const [searchName, setSearchName] = useState<string>("");
  const [displayInfo, setDisplayInfo] = useState<string>("laila");

  const renderText = (data: DataSet): React.ReactElement[] => {
    const dataArray = Object.values(data);
    
    return dataArray
    .filter((user: UserType) => { 
        return user.name.toLowerCase() === displayInfo.toLowerCase()
    })
    .map((user: UserType) => (
      <ScoreCard name={user.name} bananas={user.bananas}/>
    ));
    
  };

  const handlePress = () => {
    console.log(searchName)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='username'
        onChangeText={(text) => setSearchName(text)}
      />
      <TouchableOpacity
        style={styles.button}
      onPress={handlePress}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {renderText(data)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#000000',
    height: 50,
    width: 200,
    borderWidth: 1,
  },
  button: {
    borderColor: '#000000',
    height: 50,
    width: 200,
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'black'
  }
});
