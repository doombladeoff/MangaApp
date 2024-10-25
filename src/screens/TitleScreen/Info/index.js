import { View, ScrollView, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InfoGeneral from "./InfoGeneral";

const Info = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={{ flex: 1 }}>
      <InfoGeneral />
      <View style={{ height: insets.bottom }} />
    </ScrollView>
  );
};

export default Info;
