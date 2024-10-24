import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MangaPreview = ({ title, coverUrl }) => {
  const imageUrl = coverUrl;
  const shadows = ["transparent", "rgba(0,0,0,.01)", "rgba(0,0,0,.8)"];

  return (
    <Pressable style={styles.wrapper}>
      <View style={styles.innerContainer}>
        <Image source={{ uri: imageUrl }} style={styles.mangaImage} />
        <LinearGradient colors={shadows} style={styles.mangaShadow} />
      </View>
      <Text numberOfLines={2} style={styles.titleText}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 110,
    paddingBottom: 5,
    borderRadius: 5,
    zIndex: 1,
    marginRight: 10,
  },
  mangaImage: {
    width: 110,
    height: 160,
    borderRadius: 5,
  },
  mangaShadow: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  mangaText: {
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
    left: 0,
    paddingLeft: 5,
    paddingBottom: 6,
    color: "white",
    fontFamily: "OpenSans400",
  },
  innerContainer: {
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: { marginVertical: 2, color: "black" },
});

export default MangaPreview;
