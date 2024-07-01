import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TimelineComponent from '../../../common/components/TimelineComponent';
import { todayTimelines, tomorrowTimelines, yesterdayTimelines } from '../../../mock/Timeline.mock';
import { todayTopBar, tomoTopBar, yestTopBar } from '../items/top/TopTabElement';

const TopTab = createMaterialTopTabNavigator();

const TopTabView = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Yesterday" component={TimelineComponent} initialParams={{timelines: yesterdayTimelines}} options={yestTopBar}/>
      <TopTab.Screen name="Today" component={TimelineComponent} initialParams={{timelines:todayTimelines}} options={todayTopBar}/>
      <TopTab.Screen name="Tomorrow" component={TimelineComponent} initialParams={{timelines:tomorrowTimelines}} options={tomoTopBar}/>
    </TopTab.Navigator>
  );
}

export default TopTabView