import { Atlas, AtlasBase } from "./Atlas.model";
import {
  InputConector,
  OutputConector,
  SensorConector,
} from "./Conectors.model";

export interface AtlasDetail extends AtlasBase {
  productTypeName: string;
  systemId: string;
  latitude: string;
  longitude: string;
  connectors: {
    input: InputConector[];
    output: OutputConector[];
    sensor: SensorConector[];
  };
}

export type energyModeType = "RealTime" | "Eco" | "Sleep" | "Desconocido";
