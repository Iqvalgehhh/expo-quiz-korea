import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Speech from 'expo-speech';

import { Day1Word, Day2Word, Day3Word, Day4Word, Day5Word, Day6Word, Day7Word, Day8Word, Day9Word, Day10Word } from '@/utils';

const FlashWord = ({ id }: { id: string; }) => {
    let data: any;

    switch (id) {
        case "c1":
            data = Day1Word;
            break;
        case "c2":
            data = Day2Word;
            break;
        case "c3":
            data = Day3Word;
            break;
        case "c4":
            data = Day4Word;
            break;
        case "c5":
            data = Day5Word;
            break;
        case "c6":
            data = Day6Word;
            break;
        case "c7":
            data = Day7Word;
            break;
        case "c8":
            data = Day8Word;
            break;
        case "c9":
            data = Day9Word;
            break;
        case "c10":
            data = Day10Word;
            break;
        default:
            console.log('no data');
            break;
    }

    const [stopEffect, setStopEffect] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(data[currentWordIndex].English_Sentence);
    const [currentWordMeaning, setCurrentWordMeaning] = useState(data[currentWordIndex].English_Sentence_Mean);
const [speed, setSpeed] = useState(5000)



    useEffect(() => {
        if (!stopEffect) {
            const interval = setInterval(() => {
                const speech = (text: string) => {
                    Speech.speak(text, {
                        language: 'english'
                    });
                };
                const speechKorean = (text: string) => {
                    Speech.speak(text, {
                        language: 'korea'
                    });
                };
                const nextIndex = (currentWordIndex + 1) % data.length;
                speech(data[nextIndex].English_Sentence);
                speechKorean(data[nextIndex].English_Sentence_Mean);

                setCurrentWordIndex(nextIndex);
                setCurrentWord(data[nextIndex].English_Sentence);
                setCurrentWordMeaning(data[nextIndex].English_Sentence_Mean);
            }, speed);

            return () => clearInterval(interval);
        }
    }, [stopEffect, currentWordIndex, data, id]);


    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text>{currentWordIndex + 1} / </Text>
                <Text>{data.length}, Don't forget to choose the speed mode </Text>
                
            </View>
                <View style={styles.textContainer}>
                    <Text style={styles.speedText}>Speed : {speed==5000?'Middle':speed==6000?'Slow':'Fast'}</Text>
                    <Pressable onPress={()=>setSpeed(6000)}>
                    <Text style={styles.speedText}>Slow</Text>
                </Pressable >
                    <Pressable onPress={() => setSpeed(5000)}>
                    <Text style={styles.speedText}>Middle</Text>
                    </Pressable>
                <Pressable onPress={() => setSpeed(4500)}>
                    <Text style={styles.speedText}>Fast</Text>
                    </Pressable>
                </View>
                <View style={styles.flashContainer}>
                    <Text style={styles.words}>{currentWord}</Text>
                <Text style={styles.wordsMean}>{currentWordMeaning}</Text>
                <Pressable onPress={() => setStopEffect(!stopEffect)}> 
                    <Text style={styles.wordButton}>Press to start or stop</Text></Pressable>
                </View>
        </View>
    );
};

export default FlashWord;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    upperContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom:10
    },
    textContainer:{
        justifyContent:'space-evenly',
        flexDirection:'row',
        borderRadius:5,
        backgroundColor:'#f50ca0',

    },
    speedText:{
fontSize:15,
fontWeight:'bold',
color:'white',
    },
   flashContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:150
   },
   words:{
    fontSize:32,
    fontWeight:'bold',
    marginBottom:10
   },wordsMean:{
fontSize:20,
marginBottom:20,
   },
   wordButton:{
       borderWidth: 1, 
       borderColor: '#fff', 
       padding: 3, 
       borderRadius: 7, 
       backgroundColor: '#f50ca0', 
       color: '#fff'
   }
});