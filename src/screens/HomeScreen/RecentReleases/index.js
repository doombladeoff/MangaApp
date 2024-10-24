import { Manga, Cover } from "mangadex-full-api";
import { useEffect, useState } from "react";
import { View, Text, LayoutAnimation, Image, Pressable } from "react-native";
import Section from "../../../components/Section";
import { AntDesign } from "@expo/vector-icons";
import Placeholder from "../../../components/Placeholder";

const RecentReleases = () => {
  const [mangaTitle, setMangaTitle] = useState("");
  const [mangaCover, setMangaCover] = useState(null);
  const [mangaDescription, setMangaDescription] = useState("");

  useEffect(() => {
    const fetchRecentlyAddedManga = async () => {
      try {
        const recentManga = await Manga.search({
          limit: 1,
          order: {
            createdAt: "desc",
          },
        });

        if (recentManga.length > 0) {
          const manga = recentManga[0];
          const mangaDescription =
            manga.description.localString || "No description...";
          const englishTitle = manga.title.en;
          setMangaDescription(mangaDescription);
          setMangaTitle(englishTitle);

          const covers = await Cover.getMangaCovers({ id: manga.id });
          if (covers.length > 0) {
            const coverUrl = covers[0].url;
            setMangaCover(coverUrl);
          }
          LayoutAnimation.configureNext(
            LayoutAnimation.create(300, "easeOut", "opacity")
          );
        }
      } catch (error) {
        console.error("Error fetching recently added manga or cover:", error);
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
        <View style={{ flexDirection: "column", height: 160 }}>
          <Text numberOfLines={2} style={{ width: 250 }}>
            {mangaTitle}
          </Text>
          <Text numberOfLines={4} style={{ width: 250 }}>
            {mangaDescription}
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
      </View>
    </Section>
  );
};

export default RecentReleases;
