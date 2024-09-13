export interface AtlasBase {
  imei: string;
  name: string;
  batteryPercentage: number;
  signalPercentage: number;
  expiredDate: string;
  atlasStatus: atlasStatusType;
}
export interface Atlas extends AtlasBase {
  type: number;
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
