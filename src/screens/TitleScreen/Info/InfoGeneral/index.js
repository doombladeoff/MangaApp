import { View, Text, Pressable } from "react-native";
import Section from "../../../../components/Section";
import Cover from "./Cover";
import MediaInfo from "./MediaInfo";
import { FontAwesome5 } from "@expo/vector-icons";

const InfoGeneral = () => {
  return (
    <Section>
      <View
        style={{
          marginHorizontal: -12,
          marginTop: -6,
        }}
      >
        <Cover />
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: -12,
          marginTop: -20,
          borderTopLeftRadius: 27,
          borderTopRightRadius: 27,
          backgroundColor: "#fff",
        }}
      >
        <MediaInfo />
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={{
              backgroundColor: "skyblue",
              width: 200,
              padding: 8,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <FontAwesome5 name="book-open" size={20} color="#fff" />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              Read
            </Text>
          </Pressable>
        </View>
      </View>
    </Section>
  );
};

export default InfoGeneral;
