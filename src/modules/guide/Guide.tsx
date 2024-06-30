import React from 'react';
import DefaultOverlay from '../../common/components/DefaultOverlay';
import { Button, View } from 'react-native';

const Guide = ({navigation}: {navigation: any}) => {

  const navigateToItinerary = () => {
    navigation.navigate("Itinerary Form")
  }

  return (
    <View>
      <DefaultOverlay text={"Guide"} />
      <Button title="start journey" onPress={navigateToItinerary}/>
    </View>
  );
};


export default Guide;
