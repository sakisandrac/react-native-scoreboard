import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { data } from '../data/data';
import { useEffect, useState } from 'react';
import ScoreCard from './ScoreCard';
import banana from '../../assets/love.png';
import * as Font from 'expo-font';
import VinaSansRegular from '../../assets/fonts/VinaSans-Regular.ttf';
import { useSelector, useDispatch } from 'react-redux';
import { setInputText, setSearchName } from '../redux/actions';
import React from 'react';

export default function Home() {

    const [fontsLoaded, setFontsLoaded] = useState(false);
    const { searchName, inputText } = useSelector((state: any) => state.userReducer);
    const dispatch = useDispatch();

    const loadFonts = async () => {
        await Font.loadAsync({
            'vina-sans-regular': VinaSansRegular,
        });
        setFontsLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, []);

    const handlePress = () => {
        dispatch(setSearchName(inputText));
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}
        >
            <View style={styles.container}>
                {<Image
                    source={banana}
                    style={styles.img}
                />}
                <Text style={{
                    fontFamily: fontsLoaded ? 'vina-sans-regular' : 'sans-serif', 
                    fontSize: 24,
                    marginBottom: 10
                    }}>The Banana Scoreboard</Text>
                <Text style={styles.text}>Enter a name to search the scoreboard</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => dispatch(setInputText(text))}
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
                {searchName.length > 0 && <ScoreCard key={1} data={data} searchName={searchName} />}
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFE9',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 20,
    },
    img: {
        height: 100,
        width: 100
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
