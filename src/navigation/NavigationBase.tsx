import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import FarmListScreen from "../screens/farmListScreen/FarmListScreen";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import { useAuth } from "../store/AuthContext";

const Stack = createNativeStackNavigator();
const NavigationBase = () => {
  const { token } = useAuth();

  if (!token) {
    return <LoginScreen />;
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={FarmListScreen} />
    </Stack.Navigator>
  );
};

export default NavigationBase;

const styles = StyleSheet.create({});
