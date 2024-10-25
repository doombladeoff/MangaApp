import { View, Text } from "react-native";
import { useManga } from "../../MangaContext";

const MediaInfo = () => {
  const manga = useManga();

  return (
    <View style={{ paddingTop: 40, flex: 1, paddingHorizontal: 12, gap: 10 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Author</Text>
        <Text style={{ fontSize: 14 }}>{manga.title.en}</Text>
        <Text style={{ textTransform: "uppercase", marginBottom: 15 }}>
          {manga.year} - {manga.status}
        </Text>
      </View>
      <Text>{manga.description.ja}</Text>
    </View>
  );
};

export default MediaInfo;
