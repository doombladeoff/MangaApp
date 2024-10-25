import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import HomeNavigation from "../HomeNavigation";
import TitleScreen from "../../screens/TitleScreen";

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
      <Stack.Screen component={TitleScreen} name="TitleScreen" />
    </Stack.Navigator>
  );
};

export default MainNavigation;
