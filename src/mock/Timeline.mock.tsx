import { Image } from "react-native";
import { TimelineInterface } from "../common/components/TimelineComponent"
import Images from "../constants/Images.constant";

const yesterdayTimelines: TimelineInterface[] = [
    {
      day: 'yesterday',
      time: '06:00',
      title: 'Maldives',
      description: 'Save the Turtles',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.moon_cloud,
    },
    {
      day: 'yesterday',
      time: '06:45',
      title: 'Golden beach',
      description: 'Surfing on the sea',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.light_cloud,
    },
    {
      day: 'yesterday',
      time: '12:00',
      title: 'Coconut grove',
      description: 'BBQ party by the sea',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.moon_wind,
    },
    {
      day: 'yesterday',
      time: '14:00',
      title: 'Maldive island',
      description: 'Sea bowling',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.rain_cloud,
    },
    {
      day: 'yesterday',
      time: '18:00',
      title: 'Goa',
      description: 'Beer with water price',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.moon_wind,
    },
  ];
const todayTimelines: TimelineInterface[] = [
    {
      day: 'today',
      time: '06:00',
      title: 'Maldives',
      description: 'Save the Turtles',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.moon_cloud,
    },
    {
      day: 'today',
      time: '06:45',
      title: 'Golden beach',
      description: 'Surfing on the sea',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.light_cloud,
    },
    {
      day: 'today',
      time: '12:00',
      title: 'Coconut grove',
      description: 'BBQ party by the sea',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.moon_wind,
    },
    {
      day: 'today',
      time: '14:00',
      title: 'Maldive island',
      description: 'Sea bowling',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.rain_cloud,
    },
    {
      day: 'today',
      time: '18:00',
      title: 'Goa',
      description: 'Beer with water price',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.moon_wind,
    },
  ];
const tomorrowTimelines: TimelineInterface[] = [
    {
      day: 'tomorrow',
      time: '06:00',
      title: 'Maldives',
      description: 'Save the Turtles',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.moon_cloud,
    },
    {
      day: 'tomorrow',
      time: '06:45',
      title: 'Golden beach',
      description: 'Surfing on the sea',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.light_cloud,
    },
    {
      day: 'tomorrow',
      time: '12:00',
      title: 'Coconut grove',
      description: 'BBQ party by the sea',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.moon_wind,
    },
    {
      day: 'tomorrow',
      time: '14:00',
      title: 'Maldive island',
      description: 'Sea bowling',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.rain_cloud,
    },
    {
      day: 'tomorrow',
      time: '18:00',
      title: 'Goa',
      description: 'Beer with water price',
      icon: (
        <Image
          style={{width: 10, height: 12}}
          source={Images.timeline.location}
        />
      ),
      imageUrl: Images.timeline.moon_wind,
    },
  ];

  export {yesterdayTimelines, todayTimelines, tomorrowTimelines}