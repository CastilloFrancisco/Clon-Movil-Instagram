import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        <Feather name="plus" size={26} color="black" />
      </View>

      <Text style={styles.logo}>Instagram</Text>

      <View style={styles.side}>
        <Feather name="heart" size={26} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",

    backgroundColor: "#fff",
  },

  side: {
    paddingHorizontal: 10,
  },

  logo: {
    fontSize: 30,
    fontFamily: "Pacifico_400Regular",
  },
});