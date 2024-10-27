import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import KoreanQuizGame from '@/components/KoreanQuizGame';
import { useGlobalSearchParams } from 'expo-router';

const koreaQuiz = () => {
    const item = useGlobalSearchParams()
  return (
    <KoreanQuizGame id={item.id as string}/>
  )
}

export default koreaQuiz

const styles = StyleSheet.create({})