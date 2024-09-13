import { AtlasDetail } from "../models/AtlasDetail.model";
import { selectAtlasStatus } from "./Atlas.adapter";
import {
  InputConectorAdapterList,
  OutputConectorAdapterList,
  SensorConectorAdapterList,
} from "./Conectors.adapter";

export const AtlasDetailAdapter = (atlasDetail: any): AtlasDetail => {
  const formatedAtlasDetail: AtlasDetail = {
    atlasStatus: selectAtlasStatus(atlasDetail.atlasStatus),
    batteryPercentage: atlasDetail.batteryPercentage,
    expiredDate: atlasDetail.expiredDate,
    imei: atlasDetail.imei,
    name: atlasDetail.name,
    signalPercentage: atlasDetail.signalPercentage,
    systemId: atlasDetail.systemId,
    latitude: atlasDetail.latitude,
    longitude: atlasDetail.longitude,
    productTypeName: atlasDetail.productTypeName,
    connectors: {
      input: InputConectorAdapterList(atlasDetail.connectors.input),
      output: OutputConectorAdapterList(atlasDetail.connectors.output),
      sensor: SensorConectorAdapterList(atlasDetail.connectors.sensor),
    },
  };
  return formatedAtlasDetail;
};
