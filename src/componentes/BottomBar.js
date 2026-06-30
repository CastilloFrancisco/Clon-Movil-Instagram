import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <Feather name="home" size={28} color="black" />
      <Feather name="search" size={28} color="black" />
      <Feather name="plus-square" size={28} color="black" />
      <Feather name="video" size={28} color="black" />
      <Feather name="user" size={28} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderTopWidth: 0.5,
    borderTopColor: "#ddd",

    backgroundColor: "#fff",
  },
});