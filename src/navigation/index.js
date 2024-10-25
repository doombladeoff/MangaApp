import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import MainNavigation from "./MainNavigation";

const NavigationRoot = () => {
  return (
    <>
      <NavigationContainer theme={{ colors: "#fff" }}>
        <MainNavigation />
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default NavigationRoot;
