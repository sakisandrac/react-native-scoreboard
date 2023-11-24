import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { data } from './src/data/data';
import { Dispatch, useEffect, useState } from 'react';
import ScoreCard from './src/components/ScoreCard';
import banana from './assets/love.png';
import { connect } from 'react-redux';
import { ActionTypes, setInputText, setSearchName } from './src/redux/actions';
import * as Font from 'expo-font';
import VinaSansRegular from './assets/fonts/VinaSans-Regular.ttf';

interface AppProps {
  inputText: string;
  searchName: string;
  setInputText: (text: string) => void;
  setSearchName: (name: string) => void;
}

// function App({ inputText, searchName, setInputText, setSearchName }: AppProps) {
export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [searchName, setSearchName] = useState<string>("");
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'vina-sans-regular': VinaSansRegular,
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts()
  }, [])

  const handlePress = () => {
    setSearchName(inputText);
  };


  return (
    <View style={styles.container}>
      {<Image
        source={banana}
        style={styles.img}
        />}
      <Text style={styles.title}>The Banana Scoreboard</Text>
      <Text style={styles.text}>Enter a name to search the scoreboard</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setInputText(text)}
          value={inputText} 
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      {searchName.length > 0 && <ScoreCard key={1} data={data} searchName={searchName}/>}
    </View>
  );
}

const mapStateToProps = (state: { inputText: string; searchName: string }) => ({
  inputText: state.inputText,
  searchName: state.searchName,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  setInputText: (text: string) => dispatch(setInputText(text)),
  setSearchName: (name: string) => dispatch(setSearchName(name)),
});

// export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    backgroundColor: '#FFFFE9',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 50,
  },
  img: {
    height: 150,
    width: 150
  },
  title: {
    fontSize: 27,
    marginBottom: 15,
    fontFamily: 'vina-sans-regular'
  },
  inputContainer: {
    width: 400,
    backgroundColor: '#FFFFE9',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    marginBottom: 10
  },
  textInput: {
    borderColor: '#000000',
    height: 40,
    width: 200,
    borderWidth: .5,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 10
  },
  button: {
    borderColor: '#000000',
    height: 40,
    width: 70,
    borderWidth: .5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    color: 'black'
  }
});
