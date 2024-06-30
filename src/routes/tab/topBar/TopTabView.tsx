import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Wallet from '../../../modules/wallet/Wallet';
import Guide from '../../../modules/guide/Guide';

const TopTab = createMaterialTopTabNavigator();

const TopTabView = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={Guide} />
      <TopTab.Screen name="Settings" component={Wallet} />
    </TopTab.Navigator>
  );
}

export default TopTabView