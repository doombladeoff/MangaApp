import { Manga, Cover } from "mangadex-full-api";
import { useEffect, useState, Fragment } from "react";
import { View, Text, LayoutAnimation, Image, Pressable } from "react-native";
import Section from "../../../components/Section";
import { AntDesign } from "@expo/vector-icons";
import Placeholder from "../../../components/Placeholder";
import { useNavigation } from "@react-navigation/native";

import ContentLoader, { Rect } from "react-content-loader/native";

const RecentReleases = () => {
  const navigation = useNavigation();

  const [mangaCover, setMangaCover] = useState(null);
  const [manga, setManga] = useState(null);

  const navigateToManga = () =>
    navigation.navigate("TitleScreen", { mangaId: manga.id });

  useEffect(() => {
    const fetchRecentlyAddedManga = async () => {
      try {
        const recentManga = await Manga.search({
          limit: 1,
          hasAvailableChapters: true,
          order: {
            createdAt: "desc",
          },
        });

        if (recentManga.length > 0) {
          const manga = recentManga[0];
          setManga(manga);

          const covers = await Cover.getMangaCovers({ id: manga.id });
          if (covers.length > 0) {
            const coverUrl = covers[0].url;
            setMangaCover(coverUrl);
          }
        }
      } catch (error) {
        console.error("Error fetching recently added manga or cover:", error);
      } finally {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(300, "easeIn", "opacity")
        );
      }
    };

    fetchRecentlyAddedManga();
  }, []);

  return (
    <Section>
      <Text style={{ fontWeight: "bold", fontSize: 22, paddingBottom: 10 }}>
        Recent Releases
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        {mangaCover ? (
          <Image source={{ uri: mangaCover }} height={160} width={110} />
        ) : (
          <Placeholder number={1} />
        )}

        {manga ? (
          <View style={{ flexDirection: "column", height: 160 }}>
            <Text numberOfLines={2} style={{ width: 250 }}>
              {manga?.title.en}
            </Text>
            <Text numberOfLines={5} style={{ width: 250 }}>
              {manga?.description.localString || "No description..."}
            </Text>
            <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
              <Pressable
                style={{
                  backgroundColor: "black",
                  padding: 8,
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  shadowColor: "black",
                  shadowOpacity: 0.3,
                  shadowOffset: { width: 1, height: 4 },
                }}
                onPress={navigateToManga}
              >
                <AntDesign name="eye" size={18} color="#fff" />
                <Text style={{ color: "#fff" }}>READ MANGA</Text>
              </Pressable>

              <Pressable
                style={{
                  backgroundColor: "#fff",
                  padding: 8,
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  borderWidth: 1,
                  borderColor: "black",
                }}
              >
                <AntDesign name="hearto" size={18} color="black" />
                <Text style={{ color: "black" }}>FAVORITE</Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <PlaceholderUI />
        )}
      </View>
    </Section>
  );
};

const PlaceholderUI = () => {
  return (
    <ContentLoader width={470} height={205}>
      <Fragment>
        <Rect height={115} width={250} rx={5} x={0} y={0} />
        <Rect height={30} width={130} rx={5} x={0} y={125} />
        <Rect height={30} width={130} rx={5} x={120} y={125} />
      </Fragment>
    </ContentLoader>
  );
};

export default RecentReleases;
