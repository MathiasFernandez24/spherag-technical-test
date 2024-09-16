import { AllIconNamesTypes } from "../components/icon/IconIndex";
import { atlasEnergyModeType } from "../domain/models/Atlas.model";
import { colors } from "../theme/colors";

export const getEnergyModeIconName = (
  energyMode: atlasEnergyModeType
): AllIconNamesTypes => {
  switch (energyMode) {
    case "RealTime":
      return "bolt";
    case "Eco":
      return "batteryEco";
    case "Sleep":
      return "sleep";
    default:
      return "alertTriangle";
  }
};

export const getEnergyModeColor = (energyMode: atlasEnergyModeType): string => {
  switch (energyMode) {
    case "RealTime":
      return colors.common.allColors.greenDark;
    case "Eco":
      return colors.common.allColors.greenLight;
    case "Sleep":
      return colors.common.allColors.grey;
    default:
      return colors.common.allColors.yellow;
  }
};
