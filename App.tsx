import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { data } from './src/data/data';
import { DataSet, UserType } from './src/types'
import { useState } from 'react';
import ScoreCard from './src/components/ScoreCard';

export default function App() {
  const [searchName, setSearchName] = useState<string>("");
  const [displayInfo, setDisplayInfo] = useState<string>("");

  const renderText = (data: DataSet): React.ReactElement[] => {
    const dataArray = Object.values(data);

    return dataArray
      .filter((user: UserType) => {
        return user.name.toLowerCase() === displayInfo.toLowerCase()
      })
      .map((user: UserType) => (
        <ScoreCard key={user.uid} name={user.name} rank={dataArray.indexOf(user)+1} bananas={user.bananas} />
      ));

  };

  const renderTopTen = (data: DataSet): React.ReactElement[] => {
    const dataArray = Object.values(data);

    dataArray.sort((a: UserType, b: UserType) => b.bananas - a.bananas);
  
    return dataArray.slice(0, 10).map((user: UserType) => (
      <ScoreCard key={user.uid} name={user.name} rank={dataArray.indexOf(user)+1} bananas={user.bananas} />
    ));
  };

  const handlePress = () => {
    setDisplayInfo(searchName)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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
        <StatusBar style="auto" />
      </View>
      {renderTopTen(data)}
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
    flexDirection: 'column'
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
