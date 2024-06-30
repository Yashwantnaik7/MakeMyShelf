import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Chart from '../modules/chart/Chart';
import Guide from '../modules/guide/Guide';
import Home from '../modules/home/Home';
import Wallet from '../modules/wallet/Wallet';
import {
  chartTabBar,
  guideTabBar,
  homeTabBar,
  walletTabBar,
} from './tabItems/TabItems';
import Colors from '../constants/Colors.constant';

const TabNavigator = (props: any): JSX.Element => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      {/* <SafeAreaView style={{flex: 0, backgroundColor: 'black'}} /> */}
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar  barStyle="dark-content" />
        <Tab.Navigator
          screenOptions={() => ({
            headerShown: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarItemStyle: styles.tabBarItemStyle,
            tabBarLabelPosition: 'below-icon',
          })}>
          <Tab.Screen name="Home" component={Home} options={homeTabBar} />
          <Tab.Screen name="Wallet" component={Wallet} options={walletTabBar} />
          <Tab.Screen name="Guide" component={Guide} options={guideTabBar} />
          <Tab.Screen name="Chart" component={Chart} options={chartTabBar} />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};

export default TabNavigator;

export const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.white,
    height: 70,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    position: 'absolute',
  },
  tabBarItemStyle: {
    paddingVertical: 10,
    marginHorizontal: 4,
  },
});
