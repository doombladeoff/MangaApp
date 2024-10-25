import { LinearGradient } from "expo-linear-gradient";
import { Image, ImageBackground, View, StyleSheet } from "react-native";
import { useManga } from "../../MangaContext";

const Cover = () => {
  const manga = useManga();
  const shadow = ["rgba(0,0,0,0.2)", "rgba(0,0,0,0.2)"];
  return (
    <View>
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: manga.coverUrl }}
      >
        <LinearGradient colors={shadow} style={styles.shadow} />
        {/* <Image source={{ uri: manga.coverUrl }} style={styles.image} /> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 340,
  },
  backgroundImage: {
    height: 360,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "grey",
    opacity: 0.99,
    zIndex: -10,
    position: "relative",
  },
  shadow: { position: "absolute", left: 0, right: 0, top: 0, height: "100%" },
  image: {
    width: 220,
    borderRadius: 8,
    aspectRatio: 250 / 350,
    bottom: -10,
    position: "absolute",
  },
});

export default Cover;
