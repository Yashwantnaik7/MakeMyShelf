import React from 'react';
import { Button, View } from 'react-native';

const Guide = ({navigation}: {navigation: any}) => {
  const navigateToItinerary = () => {
    navigation.navigate('Itinerary Form');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="my journey" onPress={navigateToItinerary} />
    </View>
  );
};

export default Guide;
