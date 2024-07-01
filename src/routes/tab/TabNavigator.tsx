import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors.constant';
import Chart from '../../modules/chart/Chart';
import Home from '../../modules/home/Home';
import Wallet from '../../modules/wallet/Wallet';
import GuideNavigator from '../stack/GuideNavigator';
import {
  chartTabBar,
  guideTabBar,
  homeTabBar,
  walletTabBar,
} from './items/bottom/BottomTabElement';

const TabNavigator = (props: any): JSX.Element => {
  const TopTab = createMaterialTopTabNavigator();
  const BottomTab = createBottomTabNavigator();

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar barStyle="dark-content" />
        <BottomTab.Navigator
          screenOptions={() => ({
            headerShown: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarItemStyle: styles.tabBarItemStyle,
            tabBarLabelPosition: 'below-icon',
          })}>
          <BottomTab.Screen name="Home" component={Home} options={homeTabBar} />
          <BottomTab.Screen
            name="Wallet"
            component={Wallet}
            options={walletTabBar}
          />
          <TopTab.Screen
            name="GuideStack"
            component={GuideNavigator}
            options={guideTabBar}
          />
          <BottomTab.Screen
            name="Chart"
            component={Chart}
            options={chartTabBar}
          />
        </BottomTab.Navigator>
      </SafeAreaView>
    </>
  );
};

export default TabNavigator;

export const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.white,
    height: 100,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'absolute',
  },
  tabBarItemStyle: {
    paddingVertical: 21,
    marginHorizontal: 4,
  },
});
