import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import { useAuth } from "../store/AuthContext";
import ButtonBase from "../components/buttonBase/ButtonBase";

const NavigationBase = () => {
  const { token, setToken } = useAuth();

  return (
    <>
      {token ? (
        <View>
          <Text>LOGEADITO</Text>
          <Text>LOGEADITO</Text>
          <Text>LOGEADITO</Text>
          <ButtonBase
            title="LOGOUT"
            onPress={() => {
              setToken(null);
            }}
          />
        </View>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default NavigationBase;

const styles = StyleSheet.create({});
