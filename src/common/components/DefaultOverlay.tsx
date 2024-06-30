import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DefaultOverlay = ({text}: {text: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#D3D3D3', // Light gray color
  },
});

export default DefaultOverlay;
