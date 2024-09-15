import { StatusBar } from "expo-status-bar";
import NavigationBase from "./src/navigation/NavigationBase";
import { AuthProvider } from "./src/store/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <GestureHandlerRootView>
          <StatusBar style="auto" hidden />
          <NavigationBase />
        </GestureHandlerRootView>
      </AuthProvider>
    </NavigationContainer>
  );
}
