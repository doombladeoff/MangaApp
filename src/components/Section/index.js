import { View } from "react-native";

const Section = (props) => {
  return (
    <View
      {...props}
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingTop: 6,
        paddingBottom: 12,
        marginBottom: 10,
        shadowColor: "black",
        elevation: 1,
        shadowOffset: { width: 3454, height: 199 },
        ...props.style,
      }}
    />
  );
};

export default Section;
