export interface AtlasBase {
  imei: string;
  name: string;
  batteryPercentage: number;
  signalPercentage: number;
  expiredDate: string;
  atlasStatus: atlasStatusType;
  energyMode: atlasEnergyModeType;
}
export interface Atlas extends AtlasBase {
  type: atlasTypeType;
}

export type atlasStatusType =
  | "Dormido"
  | "Dormido sin comunicación"
  | "Dormido sin batería"
  | "Dormido con batería baja"
  | "Dormido con señal baja"
  | "Dormido con batería y señal bajas"
  | "RealTime"
  | "RealTime sin comunicación"
  | "RealTime sin batería"
  | "RealTime con batería baja"
  | "RealTime con señal baja"
  | "RealTime con batería y señal bajas"
  | "Desconocido";

export type atlasEnergyModeType = "RealTime" | "Eco" | "Sleep" | "N/A";

export type atlasTypeType =
  | "Atlas 1"
  | "Atlas 2"
  | "ATLAS_2 COUNT"
  | "ATLAS_2G"
  | "ATLAS_2S"
  | "ATLAS_2SP"
  | "ATLAS_2G_SP"
  | "ATLAS_2G_SPB"
  | "ATLAS_2SPB"
  | "ATLAS_PLUS"
  | "Atlas_Plus_S"
  | "N/A";
