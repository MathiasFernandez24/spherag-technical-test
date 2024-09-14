import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { NavigationType } from "../../navigation/NavigationBase.type";
import { colors } from "../../theme/colors";
import Icon from "../icon/Icon";
import TextCoustom from "../textCoustom/TextCoustom";
import { styles } from "./FarmCard.styles";
import { FarmCardType } from "./FarmCard.type";

const FarmCard = (props: FarmCardType) => {
  const { name, description, favorite, timezone, id } = props.farm;

  const { navigate } = useNavigation<NavigationType>();

  const navigateToFarmDetail = () => {
    navigate("FarmDetail", { farmId: id });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToFarmDetail}>
      <View style={{ flexDirection: "row" }}>
        {favorite && (
          <Icon
            iconName="favorite"
            containerStyles={styles.iconFavourite}
            color={colors.primary.default}
          />
        )}
        <TextCoustom
          text={name}
          fontStyle="L_Bold"
          containerStyles={{ flex: 1 }}
        />
      </View>
      <TextCoustom text={`Descripcion: ${description}`} fontStyle="M_regular" />
      <View style={{ flexDirection: "row" }}>
        <Icon iconName="clock" containerStyles={styles.iconClock} size={20} />
        <TextCoustom text={`${timezone} Hs.`} fontStyle="S_regular" />
      </View>
      {/* <Text>description: {description}</Text>
      <Text>timezone: {timezone}</Text>
      <Text>favorite: {favorite ? "true" : "false"}</Text>
      <Text>id: {id}</Text> */}
    </TouchableOpacity>
  );
};

export default FarmCard;
