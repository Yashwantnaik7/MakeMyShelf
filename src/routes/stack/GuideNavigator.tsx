import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Guide from '../../modules/guide/Guide';
import TopTabView from '../tab/topBar/TopTabView';

const GuideStack = createNativeStackNavigator();

const GuideNavigator = (props: any) => {
  return (
    <GuideStack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTitleAlign: 'center',
      }}>
      <GuideStack.Screen name="Guide" component={Guide} />
      <GuideStack.Screen name="Itinerary Form" component={TopTabView} />
    </GuideStack.Navigator>
  );
};

export default GuideNavigator;
