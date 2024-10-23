import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "../../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const names = {
  HomeScreen: "home",
  CatalogScreen: "view-list",
  SettingsScreen: "settings",
  ProfileScreen: "person",
  NotificationScreen: "notifications",
  LoginScreen: "person",
};

const labels = {
  HomeScreen: "Главная",
  CatalogScreen: "Каталог",
  SettingsScreen: "Настройки",
  ProfileScreen: "Профиль",
  NotificationScreen: "Уведомления",
  LoginScreen: "Профиль",
};

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
            android_ripple={
              !props.focused && {
                borderless: true,
                radius: 50,
                color: "rgba(0,0,0,0.2)",
              }
            }
          />
        ),
        tabBarIcon: (props) => (
          <MaterialIcons
            name={names[route.name]}
            size={26}
            color={props.focused ? "#fff" : "rgba(33,37,41,.8)"}
          />
        ),
        tabBarLabel: ({ focused }) => (
          <Text
            numberOfLines={1}
            style={{ color: focused ? "#212529" : "#818181" }}
          >
            {labels[route.name]}
          </Text>
        ),
      })}
      initialRouteName="HomeScreen"
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
