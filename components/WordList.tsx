import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import * as Speech from 'expo-speech';
import { Day1Word, Day2Word, Day3Word, Day4Word, Day5Word, Day6Word, Day7Word, Day8Word, Day9Word, Day10Word } from '@/utils';
import { FlashList } from '@shopify/flash-list';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';

const WordList = ({ id }: { id: string; }) => {

    let data;

    const router=useRouter();

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






    return (
            <View style={styles.container}>
                <View style={styles.gameContainer}>
                    <Pressable style={styles.gameButton}
                    onPress={()=>{
                        router.push({pathname:'/flash', params:{id:id}})
                    }}>
                    <Text style={styles.gameText}>Flash Game</Text>

                    </Pressable>
                    <Pressable style={styles.gameButton}
                        onPress={() => {
                            router.push({ pathname: '/quiz', params: { id: id } });
                        }}
                    >
                    <Text style={styles.gameText}>Quiz Game</Text>

                    </Pressable>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.cardContainer}>
                                <Text style={styles.wordContainer} onPress={() => {
                                    speech(item.Word);
                                }}>
                                    {item.Word}
    
                                </Text>
                                
                                <Text style={styles.wordContainer} onPress={() => {
                                        speech(item.Word_Meaning);
                                    }}>
                                    {item.Word_Meaning}
                                    
    
                                </Text>
    
                                <Text style={styles.wordContainer} onPress={() => {
                                        speech(item.English_Sentence);
                                    }}>
                                    {item.English_Sentence}
                                    
                                </Text>
    
                                <Text style={styles.wordContainer} onPress={() => {
                                        speech(item.English_Sentence_Mean);
                                    }}>
                                    {item.English_Sentence_Mean}
                                    
                                </Text>
                            </View>
                        );
                    }}
                />
                </View>

       
    );
};


export default WordList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 50,
    },
    cardContainer: {
        padding: 5,
        height: 250,
        justifyContent: 'space-evenly',
        alignItems:'center',
        borderWidth: 1,
        borderRadius: 15,
        margin: 50,
    },
    wordContainer: {
        flexDirection: 'row',
        fontSize: 26,
        fontWeight: 'bold'
    },
    speech: {
        position:'absolute',
        right:0
    },
    titleWord: {
       
    },
    separator: {
        height: 1,
        backgroundColor: 'black',
        marginVertical: 10
    },
    gameContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    gameButton: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor:'red',
        margin: 1,
        elevation: 3,
        height: 35,
        borderWidth: 2,
    },
    gameText: {
        fontSize: 18,
        color: 'black',
        padding: 3,
    }
});