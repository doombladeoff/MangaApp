import { useEffect, useState } from "react";
import { Text, FlatList, LayoutAnimation } from "react-native";
import { Manga, Cover } from "mangadex-full-api";
import MangaPreview from "./MangaPreview";
import Section from "../../../components/Section";
import Placeholder from "../../../components/Placeholder";

const MangaUpdates = () => {
  const [manga, setData] = useState([]);
  useEffect(() => {
    const fetchCovers = async (mangaList) => {
      const updatedMangaList = await Promise.all(
        mangaList.map(async (manga) => {
          const coverResponse = await Cover.getMangaCovers({ id: manga.id });
          const coverUrl =
            coverResponse.length > 0 ? coverResponse[0].url : null;
          return {
            ...manga,
            coverUrl,
          };
        })
      );
      return updatedMangaList;
    };

    Manga.search({
      limit: 10,
      order: {
        latestUploadedChapter: "desc",
      },
    }).then(async (response) => {
      const mangaWithCovers = await fetchCovers(response);
      setData(mangaWithCovers);
      LayoutAnimation.configureNext(
        LayoutAnimation.create(300, "easeOut", "opacity")
      );
    });
  }, []);

  const renderItem = ({ item }) => (
    <MangaPreview
      mangaID={item.id}
      title={item.title.en}
      coverUrl={item.coverUrl}
      key={item.id}
    />
  );

  return (
    <Section>
      <Text style={{ fontWeight: "bold", fontSize: 22, paddingBottom: 10 }}>
        Latest Updates
      </Text>
      {manga.length ? (
        <FlatList
          data={manga}
          horizontal
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          renderItem={renderItem}
        />
      ) : (
        <Placeholder number={4} />
      )}
    </Section>
  );
};

export default MangaUpdates;
