import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import HomeNavigation from "../HomeNavigation";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeNavigation"
      screenOptions={({ navigation }) => ({
        detachPreviousScreen: !navigation.isFocused(),
        headerStyle: {
          height: 80,
          elevation: 0,
          shadowColor: "#fff",
        },
        headerTitle: "",
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <Stack.Screen component={HomeNavigation} name="HomeNavigation" />
    </Stack.Navigator>
  );
};

export default MainNavigation;
