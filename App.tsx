import { StatusBar } from "expo-status-bar";
import NavigationBase from "./src/navigation/NavigationBase";
import { AuthProvider } from "./src/store/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <NavigationBase />
    </AuthProvider>
  );
}
