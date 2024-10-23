import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";

const NavigationRoot = () => {
  return (
    <>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
};

export default NavigationRoot;
