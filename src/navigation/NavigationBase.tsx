import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AtlasDetailScreen from "../screens/atlasDetailScreen/AtlasDetailScreen";
import FarmDetailScreen from "../screens/farmDetailScreen/FarmDetailScreen";
import FarmListScreen from "../screens/farmListScreen/FarmListScreen";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import { useAuth } from "../store/AuthContext";
import { RootStackParamListType } from "./NavigationBase.type";

const Stack = createNativeStackNavigator<RootStackParamListType>();
const NavigationBase = () => {
  const { token } = useAuth();

  if (!token) {
    return <LoginScreen />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="Farms" component={FarmListScreen} />
      <Stack.Screen name="FarmDetail" component={FarmDetailScreen} />
      <Stack.Screen name="AtlasDetail" component={AtlasDetailScreen} />
    </Stack.Navigator>
  );
};

export default NavigationBase;
