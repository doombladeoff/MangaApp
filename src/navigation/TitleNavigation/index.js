import { Vibration, Pressable, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Info from "../../screens/TitleScreen/Info";

// import ChaptersModule from '../../screens/TitleScreen/ChaptersModule';
// import CommentsModule from '../../screens/TitleScreen/CommentsModule';
// import DiscussionsModule from '../../screens/TitleScreen/DiscussionsModule';
// import InfoModule from '../../screens/TitleScreen/InfoModule';

const Tab = createBottomTabNavigator();

const names = {
  ChaptersModule: "view-list",
  CommentsModule: "chat",
  DiscussionsModule: "chat",
  InfoModule: "info",
};

const labels = {
  ChaptersModule: "Главы",
  CommentsModule: "Комментарии",
  DiscussionsModule: "Обсуждения",
  InfoModule: "Информация",
};

const TitleNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#fff", height: 80 },
        headerShown: false,
        tabBarStyle: {
          height: 75,
          backgroundColor: "#ff8c00",
        },
        tabBarButton: (props) => (
          <Pressable
            {...props}
            onLongPress={() => {
              Vibration.vibrate([0, 16]);
            }}
            android_ripple={{
              borderless: true,
              radius: 60,
              color: "black",
            }}
          />
        ),
        tabBarIcon: (props) => (
          <MaterialIcons
            name={names[route.name]}
            size={24}
            color={props.focused ? "black" : "black"}
          />
        ),
        tabBarLabel: ({ focused }) => (
          <Text
            weight={600}
            numberOfLines={1}
            size={10}
            style={{ color: focused ? "#fff" : "#fff" }}
          >
            {labels[route.name]}
          </Text>
        ),
      })}
      backBehavior="none"
    >
      <Tab.Screen component={Info} name="InfoModule" />
      {/* <Tab.Screen component={ChaptersModule} name="ChaptersModule" />
      <Tab.Screen component={CommentsModule} name="CommentsModule" />
      <Tab.Screen component={DiscussionsModule} name="DiscussionsModule" /> */}
    </Tab.Navigator>
  );
};

export default TitleNavigation;
