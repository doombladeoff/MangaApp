import Placeholder from "../../components/Placeholder";
import { useEffect, useState } from "react";
import { Text, View, LayoutAnimation } from "react-native";
import TitleNavigation from "../../navigation/TitleNavigation";
import { Cover, Manga } from "mangadex-full-api";
import { useNavigation } from "@react-navigation/native";
import { MangaContext } from "./MangaContext";
import Toast from "react-native-toast-message";

const TitleScreen = ({ route }) => {
  const { mangaId } = route.params;
  const [manga, setManga] = useState();
  const [mangaCover, setMangaCover] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    const fetchMangaAndCover = async () => {
      try {
        // Параллельный запрос на данные манги и обложку
        const [mangaData, coverData] = await Promise.all([
          Manga.get(mangaId),
          Cover.getMangaCovers({ id: mangaId }),
        ]);

        // Проверка на ошибки в данных манги
        if (mangaData.error) {
          Toast.show({
            type: "error",
            text1: mangaData.msg,
          });
          return navigation.goBack();
        }

        // Если обложка существует, добавляем её URL к данным манги
        if (coverData && coverData.length > 0) {
          mangaData.coverUrl = coverData[0].url; // Добавляем поле coverUrl в объект манги
        }

        // Устанавливаем данные манги с добавленной обложкой
        setManga(mangaData);

        // Анимация изменения
        LayoutAnimation.configureNext(
          LayoutAnimation.create(300, "easeIn", "opacity")
        );
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchMangaAndCover();

    navigation.setOptions({
      headerShown: false,
      detachPreviousScreen: !navigation.isFocused(),
    });
  }, [mangaId]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {manga ? (
        <View style={{ flex: 1 }}>
          <MangaContext.Provider value={manga}>
            <TitleNavigation />
          </MangaContext.Provider>
        </View>
      ) : (
        <Placeholder />
      )}
    </View>
  );
};

export default TitleScreen;
