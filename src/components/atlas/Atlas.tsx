import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AtlasType } from "./Atlas.type";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationType } from "../../navigation/NavigationBase.type";

const Atlas = (props: AtlasType) => {
  const { atlas, farmName } = props;
  const {
    atlasStatus,
    batteryPercentage,
    expiredDate,
    imei,
    name,
    signalPercentage,
    type,
  } = atlas;

  const { navigate } = useNavigation<NavigationType>();

  const navigateToFarmDetail = () => {
    navigate("AtlasDetail", {
      atlasImei: imei,
      farmName: farmName,
      systemName: name,
    });
  };
  return (
    <TouchableOpacity
      style={{ margin: 10, backgroundColor: "pink" }}
      onPress={navigateToFarmDetail}
    >
      <Text>atlasStatus: {atlasStatus}</Text>
      <Text>batteryPercentage: {batteryPercentage}</Text>
      <Text>expiredDate: {expiredDate}</Text>
      <Text>imei: {imei}</Text>
      <Text>name: {name}</Text>
      <Text>signalPercentage: {signalPercentage}</Text>
      <Text>type: {type}</Text>
    </TouchableOpacity>
  );
};

export default Atlas;
