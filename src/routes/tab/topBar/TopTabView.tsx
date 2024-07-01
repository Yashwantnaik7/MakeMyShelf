import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Wallet from '../../../modules/wallet/Wallet';
import TimelineComponent from '../../../common/components/TimelineComponent';
import { todayTimelines, tomorrowTimelines, yesterdayTimelines } from '../../../mock/Timeline.mock';

const TopTab = createMaterialTopTabNavigator();

const TopTabView = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Yesterday" component={TimelineComponent} initialParams={{timelines: yesterdayTimelines}}/>
      <TopTab.Screen name="Today" component={TimelineComponent} initialParams={{timelines:todayTimelines}}/>
      <TopTab.Screen name="Tomorrow" component={TimelineComponent} initialParams={{timelines:tomorrowTimelines}}/>
    </TopTab.Navigator>
  );
}

export default TopTabView