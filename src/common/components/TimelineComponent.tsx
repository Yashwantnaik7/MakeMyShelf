import Timeline from 'react-native-timeline-flatlist';
import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors.constant';
import Images from '../../constants/Images.constant';

export interface TimelineInterface {
  day: string,
  time: string,
  title: string,
  description: string,
  icon: Element,
  imageUrl: ImageProps,
}

const TimelineComponent = ({ route } : {route: any}) => {
  const { timelines } = route.params;

  const getCurrentTime24HourFormat = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const getCurrentColors = (item: TimelineInterface) => {
    switch (item.day) {
        case 'today' :  const currentTime = getCurrentTime24HourFormat();
        if (item.time <= currentTime) {
          return {
            circleColor: Colors.blue,
            lineColor: Colors.blue,
          };
        } else {
          return {
            circleColor: Colors.timline,
            lineColor: Colors.timline,
          };
        }

        case 'yesterday' : return {
            circleColor: Colors.blue,
            lineColor: Colors.blue,
          }
        case 'tomorrow' : return {
          circleColor: Colors.timline,
          lineColor: Colors.timline,
        }
    }
   
  };

  const renderDetail = (rowData: TimelineInterface, sectionID: number, rowID: number) => {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    var desc = (
      <Text style={styles.textDescription}>{rowData.description}</Text>
    );
    var image = (
      <View style={styles.imageContainer}>
        <Image source={rowData.imageUrl} style={styles.image} />
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          {title}
          {desc}
        </View>
        {image}
      </View>
    );
  };

  return (
    <Timeline
      data={timelines.map((item: TimelineInterface) => ({
        ...item,
        circleColor: getCurrentColors(item).circleColor,
        lineColor: getCurrentColors(item).lineColor,
      }))}
      renderDetail={renderDetail}
      circleSize={25}
      lineWidth={2}
      timeContainerStyle={{minWidth: 52, marginTop: -4}}
      timeStyle={{textAlign: 'center', color: 'black', padding: 5}}
      innerCircle={'icon'}
      options={{style: {padding: 16, marginTop: 45}}}
    />
  );
};

export default TimelineComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: -25,
    marginBottom: 25,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 35,
    height: 35,
  },
  textDescription: {
    color: Colors.lightGray,
  },
});
