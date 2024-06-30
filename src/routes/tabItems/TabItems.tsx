import {Image, StyleSheet, Text} from 'react-native';
import Colors from '../../constants/Colors.constant';
import Images from '../../constants/Images.constant';

const homeTabBar = {
  tabBarLabel: ({focused}: {focused: boolean}) => (
    <Text style={focused ? styles.tabLabelFocusedStyle : styles.tabLabelStyle}>
      {'Home'}
    </Text>
  ),
  tabBarIcon: ({focused}: {focused: boolean}) => (
    <Image
      source={
        focused ? Images.tabbar.selectedHome : Images.tabbar.unSelectedHome
      }
      style={[styles.iconStyle, {height: 22, width: 22}]}
    />
  ),
};
const walletTabBar = {
  tabBarLabel: ({focused}: {focused: boolean}) => (
    <Text style={focused ? styles.tabLabelFocusedStyle : styles.tabLabelStyle}>
      {'Wallet'}
    </Text>
  ),
  tabBarIcon: ({focused}: {focused: boolean}) => (
    <Image
      source={
        focused ? Images.tabbar.selectedWallet : Images.tabbar.unSelectedWallet
      }
      style={styles.iconStyle}
    />
  ),
};
const guideTabBar = {
  tabBarLabel: ({focused}: {focused: boolean}) => (
    <Text style={focused ? styles.tabLabelFocusedStyle : styles.tabLabelStyle}>
      {'Guide'}
    </Text>
  ),
  tabBarIcon: ({focused}: {focused: boolean}) => (
    <Image
      source={
        focused ? Images.tabbar.selectedGuide : Images.tabbar.unSelectedGuide
      }
      style={styles.iconStyle}
    />
  ),
};
const chartTabBar = {
  tabBarLabel: ({focused}: {focused: boolean}) => (
    <Text style={focused ? styles.tabLabelFocusedStyle : styles.tabLabelStyle}>
      {'Chart'}
    </Text>
  ),
  tabBarIcon: ({focused}: {focused: boolean}) => (
    <Image
      source={
        focused ? Images.tabbar.selectedChart : Images.tabbar.unSelectedChart
      }
      style={styles.iconStyle}
    />
  ),
};

export {homeTabBar, walletTabBar, guideTabBar, chartTabBar};

const styles = StyleSheet.create({
  tabLabelFocusedStyle: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.blue,
  },
  tabLabelStyle: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.gray,
  },
  iconStyle: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
  },
});
