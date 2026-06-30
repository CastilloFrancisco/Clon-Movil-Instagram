import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import Landing from "./src/Landing";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Landing/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});