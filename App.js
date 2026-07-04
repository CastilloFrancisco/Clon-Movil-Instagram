import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navegación/Navegador";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}