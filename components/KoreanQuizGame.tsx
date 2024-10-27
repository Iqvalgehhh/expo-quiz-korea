import { Animated, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { oxDay1, oxDay2, oxDay3, oxDay4, oxDay5, oxDay6, oxDay7, oxDay8, oxDay9, oxDay10 } from '@/utils/okquiz';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

const KoreanQuizGame = ({ id }: { id: string; }) => {
    let data: any;
    const router=useRouter()
    switch (id) {
        case "c1":
            data = oxDay1;
            break;
        case "c2":
            data = oxDay2;
            break;
        case "c3":
            data = oxDay3;
            break;
        case "c4":
            data = oxDay4;
            break;
        case "c5":
            data = oxDay5;
            break;
        case "c6":
            data = oxDay6;
            break;
        case "c7":
            data = oxDay7;
            break;
        case "c8":
            data = oxDay8;
            break;
        case "c9":
            data = oxDay9;
            break;
        case "c10":
            data = oxDay10;
            break;
        default:
            console.log('no data');
            break;
    }

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [currentOption, setCurrentOption] = useState(null);
    const [isOptionDisabled, setIsOptionDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreMode, setShowScoreMode] = useState(false);

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, data.length],
        outputRange: ['0%', '100%'],
    });

    const renderProgressBar = () => {
        return (
            <View>
                <Animated.View style={[styles.animeContainer, { width: progressAnim }]}>

                </Animated.View>
            </View>
        );

    };



    const renderQuestion = () => {
        return (
            <View style={
                styles.RenderQuestionContainer
            }>
                <View style={styles.twoGameContainer}>
                    <Pressable
                        onPress={() => { router.push({ pathname: "/quiz", params: { id: id } }); }}
                    >
                        <Text>Match English Meaning</Text>
                    </Pressable>
                </View>
                <View style={styles.upperContainer}>
                    <Text>{currentQuestionIndex + 1} / </Text>
                    <Text>{data.length}</Text>
                </View>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>{data[currentQuestionIndex]?.Korean_Mean}</Text>
                </View>
            </View>
        );
    };

    const renderNextButton = () => {
        if (showNextButton) {
            return (
                <Pressable
                    onPress={handleNext} style={styles.nextContainer}
                >
                    <Text style={styles.nextButton}>Next</Text>
                </Pressable>
            );
        } else {
            return null;
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex == data.length - 1) {
            setShowScoreMode(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCurrentOption(null);
            setIsOptionDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    };

    const renderOptions = () => {
        return (
            <View>
                {data[currentQuestionIndex].Options.map((option: string[], index: string) => (
                    <View key={index}>
                        <Pressable style={styles.optionContainer}
                            onPress={() => validateAnswer(option)}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                            {
                                option == currentOption ? (
                                    <View style={styles.iconContainer}>
                                        <AntDesign name="checkcircle" size={24} color="blue" />
                                    </View>
                                ) : option == currentOptionSelected ? (
                                    <View style={styles.iconContainer}>
                                        <Entypo name="circle-with-cross" size={24} color="red" />
                                    </View>
                                ) : null
                            }

                        </Pressable>
                    </View>
                )
                )
                }
            </View>
        );
    };

    const validateAnswer = (selectOption: any) => {
        let correct_option = data[currentQuestionIndex].Correct_Answer_Korean_Mean;
        setCurrentOptionSelected(selectOption);
        setCurrentOption(correct_option);
        setIsOptionDisabled(true);
        if (selectOption == correct_option) {
            setScore(score + 1);
        }
        setShowNextButton(true);
    };

    const retryQuiz = () => {

        setShowScoreMode(false);

        setCurrentQuestionIndex(0);
        setCurrentOptionSelected(null);
        setCurrentOption(null);
        setIsOptionDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    };

    return (
        <View style={styles.container}>
            {renderProgressBar()}
            {renderQuestion()}
            {renderOptions()}
            {renderNextButton()}
            <Modal animationType='slide' transparent={true} visible={
                showScoreMode
            }>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCardContainer}>
                        <Text style={styles.modalText}>{score > (data.length / 2) ? 'Congrats! go to next stage' : 'Try again'}</Text>
                    </View>
                    <View style={styles.modalScoreContainer}>
                        <Text style={styles.scoreText}>{score}</Text>
                        <Text style={styles.scoreText}> / {data.length}</Text>
                    </View>
                    <Pressable style={styles.modalTryButton}
                        onPress={retryQuiz}
                    >
                        <Text style={styles.modalTryText}>Retry</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
};



export default KoreanQuizGame;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    animeContainer: {
        height: 20,
        borderRadius: 20,
        backgroundColor: 'blue'
    },
    RenderQuestionContainer: {
        marginVertical: 5,

    },
    twoGameContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    upperContainer: {
        flexDirection: 'row'
    },
    questionContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 2
    },
    optionText: {
        fontSize: 20,
        marginLeft: 10

    },
    optionContainer: {
        height: 50,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    iconContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    nextContainer: {
        width: 100,
        marginTop: 20,
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextButton: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        flex: 1,
    },
    modalCardContainer: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center'
    },
    modalText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    modalScoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    scoreText: {
        fontSize: 22,
        opacity: 0.6,
        marginRight: 2
    },
    modalTryButton: {
        padding: 2,
        width: '40%',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 7
    },
    modalTryText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }

});