import { Atlas } from "../models/Atlas.model";

export const AtlasAdapter = (atlas: any): Atlas => {
  const formatedAtlas = {
    atlasStatus: atlas.name,
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
  const formaterAtlasList = atlasList.map(
    (atlasItem: any): Atlas => AtlasAdapter(atlasItem)
  );
  return formaterAtlasList;
};
