import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FarmDetailScreen from "../screens/farmDetailScreen/FarmDetailScreen";
import FarmListScreen from "../screens/farmListScreen/FarmListScreen";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import { useAuth } from "../store/AuthContext";
import { RootStackParamList } from "./NavigationBase.type";

const Stack = createNativeStackNavigator<RootStackParamList>();
const NavigationBase = () => {
  const { token } = useAuth();

  if (!token) {
    return <LoginScreen />;
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Farms" component={FarmListScreen} />
      <Stack.Screen name="FarmDetail" component={FarmDetailScreen} />
    </Stack.Navigator>
  );
};

export default NavigationBase;
