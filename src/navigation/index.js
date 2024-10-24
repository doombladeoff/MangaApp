import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";

const NavigationRoot = () => {
  return (
    <>
      <NavigationContainer theme={{ colors: "#fff" }}>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
};

export default NavigationRoot;
