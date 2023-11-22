import { View, Text } from 'react-native';
import React from 'react';

interface ScoreCardProps {
  name: string,
  bananas: number
}

export default function ScoreCard({name, bananas}: ScoreCardProps) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{bananas}</Text>
    </View>
  )
}