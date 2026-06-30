import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>

      <View style={styles.icons}>
        <Feather
          name="heart"
          size={26}
          color="black"
          style={styles.icon}
        />

        <Feather
          name="send"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",

    backgroundColor: "#fff",
  },

  logo: {
    fontSize: 28,
    fontWeight: "700",
  },

  icons: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginRight: 20,
  },
});