import { View, Text, StyleSheet } from "react-native";
import MangaUpdates from "./MangaUpdates";
import RecentReleases from "./RecentReleases";
const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <RecentReleases />
      <MangaUpdates />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
