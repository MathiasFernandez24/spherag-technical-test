import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LayoutBase from "../../components/layoutBase/LayoutBase";
import { useAuth } from "../../store/AuthContext";
import ButtonBase from "../../components/buttonBase/ButtonBase";

const FarmListScreen = () => {
  const { token, setToken } = useAuth();
  return (
    <LayoutBase>
      <Text>FarmListScreen</Text>
      <ButtonBase title="LOGOUT" onPress={() => setToken(null)} />
    </LayoutBase>
  );
};

export default FarmListScreen;

const styles = StyleSheet.create({});
