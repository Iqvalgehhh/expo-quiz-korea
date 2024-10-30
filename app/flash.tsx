import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlashWord from '@/components/FlashWord';
import { useGlobalSearchParams } from 'expo-router';

const flash = () => {
    const item=useGlobalSearchParams();
  return (
    <FlashWord id={item.id as string} />
  )
}

export default flash

const styles = StyleSheet.create({})