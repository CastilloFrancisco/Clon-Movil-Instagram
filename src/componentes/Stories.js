import { ScrollView, StyleSheet } from "react-native";
import Story from "./Story";

export default function Stories() {
  const users = [
    "You",
    "Bruno",
    "BRoth",
    "ChicoDLB",
    "Creador",
    "Timbas",
    "Runner",
    "Brunubi",
    "DrRoth",
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {users.map((user, index) => (
        <Story
          key={index}
          username={user}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
});