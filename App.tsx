import { StatusBar } from "expo-status-bar";
import NavigationBase from "./src/navigation/NavigationBase";
import { AuthProvider } from "./src/store/AuthContext";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="auto" />
        <NavigationBase />
      </AuthProvider>
    </NavigationContainer>
  );
}
