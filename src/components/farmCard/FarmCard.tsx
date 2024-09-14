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
    navigate("FarmDetail", { farmId: id, farmName: name });
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
          fontStyle="M_Bold"
          containerStyles={{ flex: 1 }}
        />
      </View>
      <TextCoustom text={`Descripcion: ${description}`} fontStyle="S_Normal" />
      <View style={{ flexDirection: "row" }}>
        <Icon iconName="clock" containerStyles={styles.iconClock} size={20} />
        <TextCoustom text={`${timezone} Hs.`} fontStyle="S_regular" />
      </View>
    </TouchableOpacity>
  );
};

export default FarmCard;
