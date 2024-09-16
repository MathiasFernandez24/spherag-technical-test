import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { NavigationType } from "../../navigation/NavigationBase.type";
import { colors } from "../../theme/colors";
import { dateFormated } from "../../utils/dateFormat";
import {
  getEnergyModeColor,
  getEnergyModeIconName,
} from "../../utils/iconsService";
import CardContainer from "../cardContainer/CardContainer";
import Icon from "../icon/Icon";
import Separator from "../separator/Separator";
import TextCoustom from "../textCoustom/TextCoustom";
import { styles } from "./Atlas.styles";
import { AtlasType } from "./Atlas.type";

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
    energyMode,
  } = atlas;

  const { navigate } = useNavigation<NavigationType>();

  const navigateToFarmDetail = () => {
    navigate("AtlasDetail", {
      atlasImei: imei,
      farmName: farmName,
      systemName: name,
    });
  };
  const isSignalActive = signalPercentage != 0;
  const isBatteryActive = batteryPercentage != 0;

  return (
    <CardContainer
      onPress={navigateToFarmDetail}
      styleContainer={styles.container}
    >
      <View style={styles.headerContainer}>
        <TextCoustom text={name} fontStyle="M_Normal" />
        <Icon
          iconName={getEnergyModeIconName(energyMode)}
          color={getEnergyModeColor(energyMode)}
          size={24}
        />
      </View>
      <TextCoustom text={`status: ${atlasStatus}`} fontStyle="S_regular" />
      <TextCoustom text={`imei: ${imei}`} fontStyle="S_regular" />
      <TextCoustom text={`type: ${type}`} fontStyle="S_regular" />
      <Separator marginVertical={8} />
      <View style={styles.footerContainer}>
        <View style={styles.footerSection}>
          <Icon
            iconName={"calendarCancel"}
            size={24}
            containerStyles={{ marginEnd: 8 }}
          />
          <TextCoustom text={dateFormated(expiredDate)} fontStyle="S_regular" />
        </View>
        <View style={styles.footerSection}>
          <Icon
            iconName={isSignalActive ? "signal" : "signalOff"}
            size={24}
            color={isSignalActive ? colors.common.succes : colors.common.error}
          />
          <TextCoustom text={`${signalPercentage}%`} fontStyle="S_regular" />
        </View>
        <View style={styles.footerSection}>
          <Icon
            iconName={isBatteryActive ? "battery" : "batteryOff"}
            size={24}
            color={
              isBatteryActive
                ? batteryPercentage > 70
                  ? colors.common.allColors.green
                  : colors.common.allColors.yellow
                : colors.common.error
            }
          />
          <TextCoustom text={`${batteryPercentage}%`} fontStyle="S_regular" />
        </View>
      </View>
    </CardContainer>
  );
};

export default Atlas;
