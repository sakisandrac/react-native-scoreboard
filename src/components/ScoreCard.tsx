import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface ScoreCardProps {
  name: string,
  bananas: number,
  rank: number
}

export default function ScoreCard({name, bananas, rank}: ScoreCardProps) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{bananas}</Text>
      <Text>{rank}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
})