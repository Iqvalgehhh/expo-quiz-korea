import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuizGame from '@/components/QuizGame';
import { useGlobalSearchParams } from 'expo-router';

const quiz = () => {
    const item = useGlobalSearchParams();
  return (
    <QuizGame id={item.id as string}/>
  )
}

export default quiz

const styles = StyleSheet.create({})