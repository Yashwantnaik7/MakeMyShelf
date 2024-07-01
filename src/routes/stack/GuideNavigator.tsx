import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Guide from '../../modules/guide/Guide';
import TopTabView from '../tab/topBar/TopTabView';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Images from '../../constants/Images.constant';

const GuideStack = createNativeStackNavigator();

const GuideNavigator = (props: any) => {
  return (
    <GuideStack.Navigator
      screenOptions={({navigation}) => ({
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.image} source={Images.tabbar.back_button} />
          </TouchableOpacity>
        ),
      })}>
      <GuideStack.Screen
        name="Guide"
        component={Guide}
        options={{headerShown: false}}
      />
      <GuideStack.Screen name="Itinerary Form" component={TopTabView} />
    </GuideStack.Navigator>
  );
};

export default GuideNavigator;

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
});
