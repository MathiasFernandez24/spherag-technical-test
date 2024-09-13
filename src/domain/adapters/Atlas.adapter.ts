import { Atlas, atlasStatusType } from "../models/Atlas.model";

export const AtlasAdapter = (atlas: any): Atlas => {
  const formatedAtlas: Atlas = {
    atlasStatus: selectAtlasStatus(atlas.atlasStatus),
    batteryPercentage: atlas.batteryPercentage,
    expiredDate: atlas.expiredDate,
    imei: atlas.imei,
    name: atlas.name,
    signalPercentage: atlas.signalPercentage,
    type: atlas.type,
  };
  return formatedAtlas;
};

export const AtlasAdapterList = (atlasList: any): Atlas[] => {
  const formatedAtlasList: Atlas[] = atlasList.map(
    (atlasItem: any): Atlas => AtlasAdapter(atlasItem)
  );
  return formatedAtlasList;
};

type atlasApiResponeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export const selectAtlasStatus = (
  atlasStatus: atlasApiResponeType
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
