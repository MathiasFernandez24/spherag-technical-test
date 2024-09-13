import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AtlasType } from "./Atlas.type";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationType } from "../../navigation/NavigationBase.type";

const Atlas = (props: AtlasType) => {
  const {
    atlasStatus,
    batteryPercentage,
    expiredDate,
    imei,
    name,
    signalPercentage,
    type,
  } = props.atlas;

  const { navigate } = useNavigation<NavigationType>();

  const navigateToFarmDetail = () => {
    navigate("AtlasDetail", { atlasImei: imei });
  };
  return (
    <TouchableOpacity
      style={{ margin: 10, backgroundColor: "pink" }}
      onPress={navigateToFarmDetail}
    >
      <Text>{atlasStatus}</Text>
      <Text>{batteryPercentage}</Text>
      <Text>{expiredDate}</Text>
      <Text>{imei}</Text>
      <Text>{name}</Text>
      <Text>{signalPercentage}</Text>
      <Text>{type}</Text>
    </TouchableOpacity>
  );
};

export default Atlas;
