import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../../constants/Colors.constant';

function getYestDate() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const day = String(yesterday.getDate()).padStart(2, '0');
  const month = yesterday.toLocaleString('en-US', {month: 'short'});
  const formattedDate = `${day} ${month}`;
  return formattedDate;
}
function getTodayDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = today.toLocaleString('en-US', {month: 'short'});
  const formattedDate = `${day} ${month}`;
  return formattedDate;
}
function getTomoDate() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const day = String(tomorrow.getDate()).padStart(2, '0');
  const month = tomorrow.toLocaleString('en-US', {month: 'short'});
  const formattedDate = `${day} ${month}`;
  return formattedDate;
}

const yestTopBar = {
  tabBarLabel: () => (
    <View style={styles.container}>
      <Text style={styles.tabTitleStyle}>{'Yesterday'}</Text>
      <Text style={styles.tabDescStyle}>{getYestDate()}</Text>
    </View>
  ),
};
const todayTopBar = {
  tabBarLabel: () => (
    <View style={styles.container}>
      <Text style={styles.tabTitleStyle}>{'Today'}</Text>
      <Text style={styles.tabDescStyle}>{getTodayDate()}</Text>
    </View>
  ),
};
const tomoTopBar = {
  tabBarLabel: () => (
    <View style={styles.container}>
      <Text style={styles.tabTitleStyle}>{'Tomorrow'}</Text>
      <Text style={styles.tabDescStyle}>{getTomoDate()}</Text>
    </View>
  ),
};

export {yestTopBar, todayTopBar, tomoTopBar};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 22,
  },
  tabTitleStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  tabDescStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.gray,
    textAlign: 'center',
    padding: 5,
  },
});
