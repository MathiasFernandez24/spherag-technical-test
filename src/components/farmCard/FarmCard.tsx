import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { FarmCardType } from "./FarmCard.type";
import { NavigationType } from "../../navigation/NavigationBase.type";

// Ahora puedes usar useNavigation con el tipo
const FarmCard = (props: FarmCardType) => {
  const { name, description, favorite, timezone, id } = props.farm;

  const { navigate } = useNavigation<NavigationType>();

  const navigateTodetail = () => {
    navigate("FarmDetail", { farmId: id });
  };
  return (
    <TouchableOpacity
      style={{ margin: 10, backgroundColor: "pink" }}
      onPress={navigateTodetail}
    >
      <Text>FarmCard</Text>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>{timezone}</Text>
      <Text>{favorite ? "true" : "false"}</Text>
      <Text>{id}</Text>
    </TouchableOpacity>
  );
};

export default FarmCard;
