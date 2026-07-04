import { View, Text, StyleSheet, Image } from "react-native";

export default function Story({ username }) {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Image
          source={{
            uri: `https://cataas.com/cat?${username}`,
          }}
          style={styles.image}
        />
      </View>

      <Text numberOfLines={1} style={styles.text}>
        {username}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 8,
    width: 70,
  },

  border: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: "#E1306C",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  text: {
    marginTop: 5,
    fontSize: 12,
  },
});