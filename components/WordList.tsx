import { Pressable, StyleSheet, Text, View } from 'react-native';
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
            <FlashList
                renderItem={({ item, index }) => {
                    return (

                        <View style={styles.cardContainer}>
                            <Text style={styles.titleWord}>Word:{index + 1}</Text>

                            <View style={styles.wordContainer}>
                                <Text style={styles.wordsText}>
                                    {item.Word}
                                </Text>
                                <Pressable onPress={() => {
                                    speech(item.Word);
                                }}>
                                    <FontAwesome5 name="music" size={24} color="black" />
                                </Pressable>
                            </View>

                            <View style={styles.wordContainer}>
                                <Text style={styles.wordsText}>
                                    {item.Word_Meaning}
                                </Text>
                                <Pressable onPress={() => {
                                    speechKorean(item.Word_Meaning);
                                }}>
                                    <FontAwesome5 name="music" size={24} color="black" />
                                </Pressable>
                            </View>

                            <Text style={styles.separator} />

                            <View style={styles.wordContainer}>
                                <Text>
                                    {item.English_Sentence}
                                </Text>
                                <Pressable onPress={() => {
                                    speech(item.English_Sentence);
                                }}>
                                    <FontAwesome5 name="music" size={24} color="black" />
                                </Pressable>
                            </View>

                            <View style={styles.wordContainer}>
                                <Text>
                                    {item.English_Sentence_Mean}
                                </Text>
                                <Pressable onPress={() => {
                                    speechKorean(item.English_Sentence_Mean);
                                }}>
                                    <FontAwesome5 name="music" size={24} color="black" />
                                </Pressable>
                            </View>

                        </View>
                    );


                }}
                estimatedItemSize={10}
                data={data}
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
        marginTop: 50,
        marginBottom: 50,
    },
    cardContainer: {
        padding: 5,
        height: 250,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 15,
        margin: 5,
        marginBottom: 10
    },
    wordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 50,
        marginRight: 50,
    },
    wordsText: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    titleWord: {
        position: 'absolute',
        top: 5,
        left: 5
    },
    separator: {
        height: 1,
        backgroundColor: 'black',
        marginVertical: 10
    },
    gameContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'grey',
    },
    gameButton:{
        backgroundColor:'grey',
        borderRadius:5,
        margin:1,
        elevation:3,
        height:35,
        borderWidth:2,
    },
    gameText:{
        fontSize:18,
        color:'black',
padding:3,
    }
});