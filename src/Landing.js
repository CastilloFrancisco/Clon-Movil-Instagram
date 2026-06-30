import { View, StyleSheet } from "react-native";

import Header from "./componentes/Header";
import Stories from "./componentes/Stories";
import Feed from "./componentes/Feed";
import BottomBar from "./componentes/BottomBar";

export default function Landing() {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />

      <View style={styles.feed}>
        <Feed />
      </View>

      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  feed: {
    flex: 1,
  },
});