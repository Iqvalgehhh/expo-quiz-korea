import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WordList from '@/components/WordList';
import { useLocalSearchParams } from 'expo-router';

const wordlist = () => {
    const item=useLocalSearchParams();
  return (
    <WordList id={item.id as string}/>
  )
}

export default wordlist

const styles = StyleSheet.create({})