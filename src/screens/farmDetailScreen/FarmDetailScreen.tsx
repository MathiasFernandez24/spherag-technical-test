import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamListType } from "../../navigation/NavigationBase.type";

type FarmDetailRouteProp = RouteProp<RootStackParamListType, "FarmDetail">;
const FarmDetailScreen = () => {
  const { params } = useRoute<FarmDetailRouteProp>();

  return (
    <View>
      <Text>FarmDetailScreen</Text>
      <Text>{params.farmId}</Text>
    </View>
  );
};

export default FarmDetailScreen;

const styles = StyleSheet.create({});
