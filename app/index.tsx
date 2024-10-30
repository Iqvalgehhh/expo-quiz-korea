import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CATEGORIES } from '@/utils/data';
import { FlashList } from "@shopify/flash-list";
import Item from '@/components/Item';

const index = () => {

  const category = CATEGORIES;
  return (
    <FlashList
      renderItem={({ item }) => {
        return <Item item={item} />;
      }}
      estimatedItemSize={10}
      data={category}
      numColumns={1}
      
    />
  );
};

export default index;

const styles = StyleSheet.create({});