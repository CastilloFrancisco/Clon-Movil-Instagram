import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../pantallas/Landing";
import Post from "../pantallas/Post";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Landing}
      />

      <Stack.Screen
        name="Post"
        component={Post}
      />
    </Stack.Navigator>
  );
}