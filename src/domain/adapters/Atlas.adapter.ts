import {
  Atlas,
  atlasEnergyModeType,
  atlasStatusType,
  atlasTypeType,
} from "../models/Atlas.model";

export const AtlasAdapter = (atlas: any): Atlas => {
  const formatedAtlas: Atlas = {
    atlasStatus: selectAtlasStatus(atlas.atlasStatus),
    batteryPercentage: atlas.batteryPercentage,
    expiredDate: atlas.expiredDate,
    imei: atlas.imei,
    name: atlas.name,
    signalPercentage: atlas.signalPercentage,
    type: selectAtlasType(atlas.type),
    energyMode: selectAtlasenergyMode(atlas.energyMode),
  };
  return formatedAtlas;
};

export const AtlasAdapterList = (atlasList: any): Atlas[] => {
  const formatedAtlasList: Atlas[] = atlasList.map(
    (atlasItem: any): Atlas => AtlasAdapter(atlasItem)
  );
  return formatedAtlasList;
};

type atlasApiResponseStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type atlasApiResponseEnergyMode = 0 | 1 | 2;
type atlasApiResponseType = 1 | 2 | 4 | 5 | 6 | 10 | 11 | 13 | 15 | 16 | 17;

export const selectAtlasStatus = (
  atlasStatus: atlasApiResponseStatus
): atlasStatusType => {
  switch (atlasStatus) {
    case 1:
      return "Dormido";
    case 2:
      return "Dormido sin comunicación";
    case 3:
      return "Dormido sin batería";
    case 4:
      return "Dormido con batería baja";
    case 5:
      return "Dormido con señal baja";
    case 6:
      return "Dormido con batería y señal bajas";
    case 7:
      return "RealTime";
    case 8:
      return "RealTime sin comunicación";
    case 9:
      return "RealTime sin batería";
    case 10:
      return "RealTime con batería baja";
    case 11:
      return "RealTime con señal baja";
    case 12:
      return "RealTime con batería y señal bajas";
    default:
      return "Desconocido";
  }
};

export const selectAtlasenergyMode = (
  atlasStatus: atlasApiResponseEnergyMode
): atlasEnergyModeType => {
  switch (atlasStatus) {
    case 0:
      return "RealTime";
    case 1:
      return "Eco";
    case 2:
      return "Sleep";
    default:
      return "N/A";
  }
};

const selectAtlasType = (type: atlasApiResponseType): atlasTypeType => {
  switch (type) {
    case 1:
      return "Atlas 1";
    case 2:
      return "Atlas 2";
    case 4:
      return "ATLAS_2 COUNT";
    case 5:
      return "ATLAS_2G";
    case 6:
      return "ATLAS_2S";
    case 10:
      return "ATLAS_2SP";
    case 11:
      return "ATLAS_2G_SP";
    case 13:
      return "ATLAS_2G_SPB";
    case 15:
      return "ATLAS_2SPB";
    case 16:
      return "ATLAS_PLUS";
    case 17:
      return "Atlas_Plus_S";
    default:
      return "N/A";
  }
};
